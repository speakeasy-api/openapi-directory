import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class AllCertsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class AllCertsRequest:
    security: AllCertsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllCertsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificates: Optional[list[shared_certificate.Certificate]] = dataclasses.field(default=None)
    
