import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import call_enum_update_status_enum as shared_call_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call as shared_api_v2010_account_call


UPDATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateCallPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateCallUpdateCallRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateCallUpdateCallRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateCallUpdateCallRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateCallUpdateCallRequest:
    fallback_method: Optional[UpdateCallUpdateCallRequestFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    method: Optional[UpdateCallUpdateCallRequestMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Method' }})
    status: Optional[shared_call_enum_update_status_enum.CallEnumUpdateStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[UpdateCallUpdateCallRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    twiml: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Twiml' }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclasses.dataclass
class UpdateCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCallRequest:
    path_params: UpdateCallPathParams = dataclasses.field()
    security: UpdateCallSecurity = dataclasses.field()
    request: Optional[UpdateCallUpdateCallRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call: Optional[shared_api_v2010_account_call.APIV2010AccountCall] = dataclasses.field(default=None)
    
