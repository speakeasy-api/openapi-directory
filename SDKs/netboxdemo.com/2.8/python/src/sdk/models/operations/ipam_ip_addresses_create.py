import dataclasses
from typing import Optional
from ..shared import writableipaddress as shared_writableipaddress
from ..shared import ipaddress as shared_ipaddress


@dataclasses.dataclass
class IpamIPAddressesCreateRequest:
    request: shared_writableipaddress.WritableIPAddressInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamIPAddressesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_address: Optional[shared_ipaddress.IPAddress] = dataclasses.field(default=None)
    
