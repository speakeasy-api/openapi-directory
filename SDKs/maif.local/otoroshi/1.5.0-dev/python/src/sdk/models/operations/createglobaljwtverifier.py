import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import globaljwtverifier as shared_globaljwtverifier


@dataclasses.dataclass
class CreateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateGlobalJwtVerifierRequest:
    security: CreateGlobalJwtVerifierSecurity = dataclasses.field()
    request: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGlobalJwtVerifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_jwt_verifier: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None)
    
