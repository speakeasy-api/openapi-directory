import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import globaljwtverifier as shared_globaljwtverifier


@dataclasses.dataclass
class FindAllGlobalJwtVerifiersSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindAllGlobalJwtVerifiersRequest:
    security: FindAllGlobalJwtVerifiersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindAllGlobalJwtVerifiersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_jwt_verifiers: Optional[list[shared_globaljwtverifier.GlobalJwtVerifier]] = dataclasses.field(default=None)
    
