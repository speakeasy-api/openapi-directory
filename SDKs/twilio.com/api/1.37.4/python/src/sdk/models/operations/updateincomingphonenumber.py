import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import incoming_phone_number_enum_emergency_status_enum as shared_incoming_phone_number_enum_emergency_status_enum
from ..shared import incoming_phone_number_enum_voice_receive_mode_enum as shared_incoming_phone_number_enum_voice_receive_mode_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number as shared_api_v2010_account_incoming_phone_number


UPDATE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateIncomingPhoneNumberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    bundle_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared_incoming_phone_number_enum_emergency_status_enum.IncomingPhoneNumberEnumEmergencyStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared_incoming_phone_number_enum_voice_receive_mode_enum.IncomingPhoneNumberEnumVoiceReceiveModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class UpdateIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateIncomingPhoneNumberRequest:
    path_params: UpdateIncomingPhoneNumberPathParams = dataclasses.field()
    security: UpdateIncomingPhoneNumberSecurity = dataclasses.field()
    request: Optional[UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateIncomingPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number: Optional[shared_api_v2010_account_incoming_phone_number.APIV2010AccountIncomingPhoneNumber] = dataclasses.field(default=None)
    
