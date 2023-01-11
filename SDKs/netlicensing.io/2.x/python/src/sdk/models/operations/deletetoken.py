import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTokenPathParams:
    token_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tokenNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTokenSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTokenRequest:
    path_params: DeleteTokenPathParams = dataclasses.field()
    security: DeleteTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
