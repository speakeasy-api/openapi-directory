import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicerole as shared_devicerole


@dataclasses.dataclass
class DcimDeviceRolesListQueryParams:
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    vm_role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vm_role', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimDeviceRolesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_devicerole.DeviceRole] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimDeviceRolesListRequest:
    query_params: DcimDeviceRolesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceRolesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_device_roles_list_200_application_json_object: Optional[DcimDeviceRolesList200ApplicationJSON] = dataclasses.field(default=None)
    
