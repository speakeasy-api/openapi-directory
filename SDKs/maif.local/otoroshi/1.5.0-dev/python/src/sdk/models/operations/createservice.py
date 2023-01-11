import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class CreateServiceSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[shared_service.Service] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
