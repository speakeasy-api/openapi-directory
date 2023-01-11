import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualmachineinterface as shared_virtualmachineinterface


@dataclasses.dataclass
class VirtualizationInterfacesListQueryParams:
    enabled: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mac_address_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ic', 'style': 'form', 'explode': True }})
    mac_address_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ie', 'style': 'form', 'explode': True }})
    mac_address_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__iew', 'style': 'form', 'explode': True }})
    mac_address_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__isw', 'style': 'form', 'explode': True }})
    mac_address_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__n', 'style': 'form', 'explode': True }})
    mac_address_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nic', 'style': 'form', 'explode': True }})
    mac_address_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nie', 'style': 'form', 'explode': True }})
    mac_address_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__niew', 'style': 'form', 'explode': True }})
    mac_address_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nisw', 'style': 'form', 'explode': True }})
    mtu: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    mtu_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu__gt', 'style': 'form', 'explode': True }})
    mtu_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu__gte', 'style': 'form', 'explode': True }})
    mtu_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu__lt', 'style': 'form', 'explode': True }})
    mtu_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu__lte', 'style': 'form', 'explode': True }})
    mtu_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu__n', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine__n', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    virtual_machine_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualizationInterfacesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_virtualmachineinterface.VirtualMachineInterface] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class VirtualizationInterfacesListRequest:
    query_params: VirtualizationInterfacesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationInterfacesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtualization_interfaces_list_200_application_json_object: Optional[VirtualizationInterfacesList200ApplicationJSON] = dataclasses.field(default=None)
    
