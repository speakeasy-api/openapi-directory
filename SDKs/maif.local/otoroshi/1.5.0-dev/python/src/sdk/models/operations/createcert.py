import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class CreateCertSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCertRequest:
    security: CreateCertSecurity = dataclasses.field()
    request: Optional[shared_certificate.Certificate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None)
    
