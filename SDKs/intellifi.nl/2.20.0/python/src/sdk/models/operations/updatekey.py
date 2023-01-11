import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import key as shared_key
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class UpdateKeyPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateKeySecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class UpdateKeyRequest:
    path_params: UpdateKeyPathParams = dataclasses.field()
    request: shared_key.KeyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
