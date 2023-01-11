import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class PutCertPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCertSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PutCertRequest:
    path_params: PutCertPathParams = dataclasses.field()
    security: PutCertSecurity = dataclasses.field()
    request: Optional[shared_certificate.Certificate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None)
    
