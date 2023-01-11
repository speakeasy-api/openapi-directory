import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import preview_wireless_sim as shared_preview_wireless_sim


UPDATE_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateWirelessSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateWirelessSimUpdateWirelessSimRequest:
    callback_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    commands_callback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackMethod' }})
    commands_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    rate_plan: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RatePlan' }})
    sms_fallback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_fallback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class UpdateWirelessSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWirelessSimRequest:
    path_params: UpdateWirelessSimPathParams = dataclasses.field()
    security: UpdateWirelessSimSecurity = dataclasses.field()
    request: Optional[UpdateWirelessSimUpdateWirelessSimRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWirelessSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_sim: Optional[shared_preview_wireless_sim.PreviewWirelessSim] = dataclasses.field(default=None)
    
