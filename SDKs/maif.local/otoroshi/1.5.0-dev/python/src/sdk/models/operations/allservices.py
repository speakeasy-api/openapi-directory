import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class AllServicesSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class AllServicesRequest:
    security: AllServicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None)
    
