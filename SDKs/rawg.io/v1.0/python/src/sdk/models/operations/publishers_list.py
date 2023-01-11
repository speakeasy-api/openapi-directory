import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publisher as shared_publisher


@dataclasses.dataclass
class PublishersListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PublishersList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_publisher.Publisher] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PublishersListRequest:
    query_params: PublishersListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PublishersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    publishers_list_200_application_json_object: Optional[PublishersList200ApplicationJSON] = dataclasses.field(default=None)
    
