import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import globaljwtverifier as shared_globaljwtverifier


@dataclasses.dataclass
class UpdateGlobalJwtVerifierPathParams:
    verifier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateGlobalJwtVerifierRequest:
    path_params: UpdateGlobalJwtVerifierPathParams = dataclasses.field()
    security: UpdateGlobalJwtVerifierSecurity = dataclasses.field()
    request: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGlobalJwtVerifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_jwt_verifier: Optional[shared_globaljwtverifier.GlobalJwtVerifier] = dataclasses.field(default=None)
    
