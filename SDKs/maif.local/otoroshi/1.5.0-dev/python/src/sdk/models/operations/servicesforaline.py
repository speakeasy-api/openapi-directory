import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class ServicesForALinePathParams:
    line: str = dataclasses.field(metadata={'path_param': { 'field_name': 'line', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicesForALineSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServicesForALineRequest:
    path_params: ServicesForALinePathParams = dataclasses.field()
    security: ServicesForALineSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServicesForALineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None)
    
