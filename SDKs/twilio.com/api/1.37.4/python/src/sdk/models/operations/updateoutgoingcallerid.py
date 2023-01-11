import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_outgoing_caller_id as shared_api_v2010_account_outgoing_caller_id


UPDATE_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateOutgoingCallerIDPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateOutgoingCallerIDUpdateOutgoingCallerIDRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateOutgoingCallerIDSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateOutgoingCallerIDRequest:
    path_params: UpdateOutgoingCallerIDPathParams = dataclasses.field()
    security: UpdateOutgoingCallerIDSecurity = dataclasses.field()
    request: Optional[UpdateOutgoingCallerIDUpdateOutgoingCallerIDRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateOutgoingCallerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_outgoing_caller_id: Optional[shared_api_v2010_account_outgoing_caller_id.APIV2010AccountOutgoingCallerID] = dataclasses.field(default=None)
    
