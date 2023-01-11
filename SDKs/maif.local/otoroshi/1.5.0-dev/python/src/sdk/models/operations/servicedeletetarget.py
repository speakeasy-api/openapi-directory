import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import target as shared_target


@dataclasses.dataclass
class ServiceDeleteTargetPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceDeleteTargetSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceDeleteTargetRequest:
    path_params: ServiceDeleteTargetPathParams = dataclasses.field()
    security: ServiceDeleteTargetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceDeleteTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None)
    
