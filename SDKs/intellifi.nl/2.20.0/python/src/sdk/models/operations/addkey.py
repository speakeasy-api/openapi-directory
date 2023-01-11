import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import key as shared_key
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddKeySecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class AddKeyRequest:
    request: shared_key.KeyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
