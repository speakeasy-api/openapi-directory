import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableipaddress as shared_writableipaddress
from ..shared import ipaddress as shared_ipaddress


@dataclasses.dataclass
class IpamIPAddressesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamIPAddressesPartialUpdateRequest:
    path_params: IpamIPAddressesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableipaddress.WritableIPAddressInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamIPAddressesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_address: Optional[shared_ipaddress.IPAddress] = dataclasses.field(default=None)
    
