import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interface as shared_interface


@dataclasses.dataclass
class VirtualizationInterfacesListQueryParams:
    enabled: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mtu: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualizationInterfacesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_interface.Interface] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
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
    
