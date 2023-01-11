import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_application as shared_api_v2010_account_application


CREATE_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateApplicationPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateApplicationCreateApplicationRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateApplicationCreateApplicationRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateApplicationCreateApplicationRequest:
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    message_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessageStatusCallback' }})
    sms_fallback_method: Optional[CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateApplicationCreateApplicationRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsStatusCallback' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateApplicationCreateApplicationRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateApplicationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateApplicationRequest:
    path_params: CreateApplicationPathParams = dataclasses.field()
    security: CreateApplicationSecurity = dataclasses.field()
    request: Optional[CreateApplicationCreateApplicationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_application: Optional[shared_api_v2010_account_application.APIV2010AccountApplication] = dataclasses.field(default=None)
    
