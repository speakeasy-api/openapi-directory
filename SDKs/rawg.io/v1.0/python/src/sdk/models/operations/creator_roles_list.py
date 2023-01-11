import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import position as shared_position


@dataclasses.dataclass
class CreatorRolesListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreatorRolesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_position.Position] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CreatorRolesListRequest:
    query_params: CreatorRolesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreatorRolesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creator_roles_list_200_application_json_object: Optional[CreatorRolesList200ApplicationJSON] = dataclasses.field(default=None)
    
