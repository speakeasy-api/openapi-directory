import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_key as shared_api_v2010_account_key


UPDATE_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateKeyPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateKeyUpdateKeyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateKeyRequest:
    path_params: UpdateKeyPathParams = dataclasses.field()
    security: UpdateKeySecurity = dataclasses.field()
    request: Optional[UpdateKeyUpdateKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_key: Optional[shared_api_v2010_account_key.APIV2010AccountKey] = dataclasses.field(default=None)
    
