import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddress as shared_ipaddress


@dataclasses.dataclass
class IpamIPAddressesListQueryParams:
    address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    interface_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interface_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mask_length: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mask_length', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    vrf: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vrf', 'style': 'form', 'explode': True }})
    vrf_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vrf_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class IpamIPAddressesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_ipaddress.IPAddress] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class IpamIPAddressesListRequest:
    query_params: IpamIPAddressesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamIPAddressesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ipam_ip_addresses_list_200_application_json_object: Optional[IpamIPAddressesList200ApplicationJSON] = dataclasses.field(default=None)
    
