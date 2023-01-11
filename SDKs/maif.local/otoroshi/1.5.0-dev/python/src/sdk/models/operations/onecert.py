import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class OneCertPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OneCertSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class OneCertRequest:
    path_params: OneCertPathParams = dataclasses.field()
    security: OneCertSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OneCertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None)
    
