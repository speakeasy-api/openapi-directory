import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import useraction as shared_useraction


@dataclasses.dataclass
class ExtrasRecentActivityListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ExtrasRecentActivityList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_useraction.UserAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ExtrasRecentActivityListRequest:
    query_params: ExtrasRecentActivityListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasRecentActivityListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extras_recent_activity_list_200_application_json_object: Optional[ExtrasRecentActivityList200ApplicationJSON] = dataclasses.field(default=None)
    
