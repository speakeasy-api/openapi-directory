import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteGlobalJwtVerifierPathParams:
    verifier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGlobalJwtVerifierSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteGlobalJwtVerifierRequest:
    path_params: DeleteGlobalJwtVerifierPathParams = dataclasses.field()
    security: DeleteGlobalJwtVerifierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGlobalJwtVerifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
