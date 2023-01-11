import dataclasses
from typing import Optional
from enum import Enum
from ..shared import incoming_phone_number_enum_emergency_status_enum as shared_incoming_phone_number_enum_emergency_status_enum
from ..shared import incoming_phone_number_enum_voice_receive_mode_enum as shared_incoming_phone_number_enum_voice_receive_mode_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number as shared_api_v2010_account_incoming_phone_number


CREATE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateIncomingPhoneNumberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest:
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AreaCode' }})
    bundle_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared_incoming_phone_number_enum_emergency_status_enum.IncomingPhoneNumberEnumEmergencyStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared_incoming_phone_number_enum_voice_receive_mode_enum.IncomingPhoneNumberEnumVoiceReceiveModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberRequest:
    path_params: CreateIncomingPhoneNumberPathParams = dataclasses.field()
    security: CreateIncomingPhoneNumberSecurity = dataclasses.field()
    request: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number: Optional[shared_api_v2010_account_incoming_phone_number.APIV2010AccountIncomingPhoneNumber] = dataclasses.field(default=None)
    
