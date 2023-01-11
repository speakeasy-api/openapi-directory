import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectchange as shared_objectchange


@dataclasses.dataclass
class ExtrasObjectChangesListQueryParams:
    action: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    changed_object_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changed_object_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    object_repr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_repr', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ExtrasObjectChangesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_objectchange.ObjectChange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ExtrasObjectChangesListRequest:
    query_params: ExtrasObjectChangesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasObjectChangesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extras_object_changes_list_200_application_json_object: Optional[ExtrasObjectChangesList200ApplicationJSON] = dataclasses.field(default=None)
    
