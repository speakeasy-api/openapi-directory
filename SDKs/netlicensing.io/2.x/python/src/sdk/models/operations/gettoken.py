import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTokenPathParams:
    token_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tokenNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTokenSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetTokenRequest:
    path_params: GetTokenPathParams = dataclasses.field()
    security: GetTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
