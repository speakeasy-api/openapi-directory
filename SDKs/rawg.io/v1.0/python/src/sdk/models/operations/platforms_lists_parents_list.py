import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platformparentsingle as shared_platformparentsingle


@dataclasses.dataclass
class PlatformsListsParentsListQueryParams:
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PlatformsListsParentsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_platformparentsingle.PlatformParentSingle] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PlatformsListsParentsListRequest:
    query_params: PlatformsListsParentsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PlatformsListsParentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    platforms_lists_parents_list_200_application_json_object: Optional[PlatformsListsParentsList200ApplicationJSON] = dataclasses.field(default=None)
    
