import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import message_enum_update_status_enum as shared_message_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_message as shared_api_v2010_account_message


UPDATE_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateMessagePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMessageUpdateMessageRequest:
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    status: Optional[shared_message_enum_update_status_enum.MessageEnumUpdateStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMessageRequest:
    path_params: UpdateMessagePathParams = dataclasses.field()
    security: UpdateMessageSecurity = dataclasses.field()
    request: Optional[UpdateMessageUpdateMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_message: Optional[shared_api_v2010_account_message.APIV2010AccountMessage] = dataclasses.field(default=None)
    
