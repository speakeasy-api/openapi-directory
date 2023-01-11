import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_queue_member as shared_api_v2010_account_queue_member


UPDATE_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateMemberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    
class UpdateMemberUpdateMemberRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateMemberUpdateMemberRequest:
    url: str = dataclasses.field(metadata={'form': { 'field_name': 'Url' }})
    method: Optional[UpdateMemberUpdateMemberRequestMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Method' }})
    

@dataclasses.dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = dataclasses.field()
    security: UpdateMemberSecurity = dataclasses.field()
    request: Optional[UpdateMemberUpdateMemberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_queue_member: Optional[shared_api_v2010_account_queue_member.APIV2010AccountQueueMember] = dataclasses.field(default=None)
    
