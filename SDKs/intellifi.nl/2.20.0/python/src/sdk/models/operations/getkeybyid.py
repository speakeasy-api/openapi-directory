import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import key as shared_key


@dataclasses.dataclass
class GetKeyByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetKeyByIDSecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class GetKeyByIDRequest:
    path_params: GetKeyByIDPathParams = dataclasses.field()
    security: GetKeyByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetKeyByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    key: Optional[shared_key.Key] = dataclasses.field(default=None)
    
