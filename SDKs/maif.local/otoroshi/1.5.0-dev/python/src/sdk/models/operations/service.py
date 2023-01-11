import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class ServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceRequest:
    path_params: ServicePathParams = dataclasses.field()
    security: ServiceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
