import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interface as shared_interface


@dataclasses.dataclass
class DcimInterfacesListQueryParams:
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    enabled: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    form_factor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'form_factor', 'style': 'form', 'explode': True }})
    lag_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lag_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mgmt_only: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mgmt_only', 'style': 'form', 'explode': True }})
    mtu: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    vlan: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    vlan_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimInterfacesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_interface.Interface] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimInterfacesListRequest:
    query_params: DcimInterfacesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfacesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_interfaces_list_200_application_json_object: Optional[DcimInterfacesList200ApplicationJSON] = dataclasses.field(default=None)
    
