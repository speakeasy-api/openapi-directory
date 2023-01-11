import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DevicesQueryParams:
    os: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DevicesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DevicesRequest:
    query_params: DevicesQueryParams = dataclasses.field()
    security: DevicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    os_devices: Optional[Any] = dataclasses.field(default=None)
    
