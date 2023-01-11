import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rackrole as shared_rackrole


@dataclasses.dataclass
class DcimRackRolesListQueryParams:
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimRackRolesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_rackrole.RackRole] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimRackRolesListRequest:
    query_params: DcimRackRolesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackRolesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_rack_roles_list_200_application_json_object: Optional[DcimRackRolesList200ApplicationJSON] = dataclasses.field(default=None)
    
