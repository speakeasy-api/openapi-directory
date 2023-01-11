import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sim_enum_reset_status_enum as shared_sim_enum_reset_status_enum
from ..shared import sim_enum_status_enum as shared_sim_enum_status_enum
from ..shared import security as shared_security
from ..shared import wireless_v1_sim as shared_wireless_v1_sim


UPDATE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class UpdateSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateSimUpdateSimRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimUpdateSimRequestCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimUpdateSimRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimUpdateSimRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimUpdateSimRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimUpdateSimRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateSimUpdateSimRequest:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    callback_method: Optional[UpdateSimUpdateSimRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    commands_callback_method: Optional[UpdateSimUpdateSimRequestCommandsCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackMethod' }})
    commands_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    rate_plan: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RatePlan' }})
    reset_status: Optional[shared_sim_enum_reset_status_enum.SimEnumResetStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ResetStatus' }})
    sms_fallback_method: Optional[UpdateSimUpdateSimRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateSimUpdateSimRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status: Optional[shared_sim_enum_status_enum.SimEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_fallback_method: Optional[UpdateSimUpdateSimRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateSimUpdateSimRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class UpdateSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSimRequest:
    path_params: UpdateSimPathParams = dataclasses.field()
    security: UpdateSimSecurity = dataclasses.field()
    request: Optional[UpdateSimUpdateSimRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_sim: Optional[shared_wireless_v1_sim.WirelessV1Sim] = dataclasses.field(default=None)
    
