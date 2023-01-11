import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import globaljwtverifier as shared_globaljwtverifier


@dataclasses.dataclass
class PatchGlobalJwtVerifierPathParams:
    verifier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchGlobalJwtVerifierSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchGlobalJwtVerifierRequest:
    path_params: PatchGlobalJwtVerifierPathParams = dataclasses.field()
    security: PatchGlobalJwtVerifierSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchGlobalJwtVerifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_jwt_verifier: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None)
    
