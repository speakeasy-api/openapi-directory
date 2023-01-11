import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import target as shared_target


@dataclasses.dataclass
class ServiceTargetsPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceTargetsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceTargetsRequest:
    path_params: ServiceTargetsPathParams = dataclasses.field()
    security: ServiceTargetsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None)
    
