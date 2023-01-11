import dataclasses
from typing import Optional
from ..shared import ipaddress as shared_ipaddress


@dataclasses.dataclass
class IpamIPAddressesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamIPAddressesReadRequest:
    path_params: IpamIPAddressesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamIPAddressesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_address: Optional[shared_ipaddress.IPAddress] = dataclasses.field(default=None)
    
