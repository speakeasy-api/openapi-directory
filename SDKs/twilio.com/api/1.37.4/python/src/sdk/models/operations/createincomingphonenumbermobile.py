import dataclasses
from typing import Optional
from enum import Enum
from ..shared import incoming_phone_number_mobile_enum_emergency_status_enum as shared_incoming_phone_number_mobile_enum_emergency_status_enum
from ..shared import incoming_phone_number_mobile_enum_voice_receive_mode_enum as shared_incoming_phone_number_mobile_enum_voice_receive_mode_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_mobile as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_mobile


CREATE_INCOMING_PHONE_NUMBER_MOBILE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateIncomingPhoneNumberMobilePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest:
    phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    bundle_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared_incoming_phone_number_mobile_enum_emergency_status_enum.IncomingPhoneNumberMobileEnumEmergencyStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared_incoming_phone_number_mobile_enum_voice_receive_mode_enum.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberMobileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberMobileRequest:
    path_params: CreateIncomingPhoneNumberMobilePathParams = dataclasses.field()
    security: CreateIncomingPhoneNumberMobileSecurity = dataclasses.field()
    request: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberMobileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number_incoming_phone_number_mobile: Optional[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_mobile.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile] = dataclasses.field(default=None)
    
