import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import globaljwtverifier as shared_globaljwtverifier


@dataclasses.dataclass
class FindGlobalJwtVerifiersByIDPathParams:
    verifier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindGlobalJwtVerifiersByIDSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindGlobalJwtVerifiersByIDRequest:
    path_params: FindGlobalJwtVerifiersByIDPathParams = dataclasses.field()
    security: FindGlobalJwtVerifiersByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindGlobalJwtVerifiersByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_jwt_verifier: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None)
    
