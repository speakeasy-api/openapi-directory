import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_origination_url as shared_trunking_v1_trunk_origination_url


UPDATE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class UpdateOriginationURLPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateOriginationURLUpdateOriginationURLRequest:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    sip_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipUrl' }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Weight' }})
    

@dataclasses.dataclass
class UpdateOriginationURLSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateOriginationURLRequest:
    path_params: UpdateOriginationURLPathParams = dataclasses.field()
    security: UpdateOriginationURLSecurity = dataclasses.field()
    request: Optional[UpdateOriginationURLUpdateOriginationURLRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateOriginationURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_origination_url: Optional[shared_trunking_v1_trunk_origination_url.TrunkingV1TrunkOriginationURL] = dataclasses.field(default=None)
    
