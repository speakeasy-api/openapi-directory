import dataclasses
from typing import Optional
from enum import Enum
from ..shared import incoming_phone_number_toll_free_enum_emergency_status_enum as shared_incoming_phone_number_toll_free_enum_emergency_status_enum
from ..shared import incoming_phone_number_toll_free_enum_voice_receive_mode_enum as shared_incoming_phone_number_toll_free_enum_voice_receive_mode_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free


CREATE_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateIncomingPhoneNumberTollFreePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest:
    phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    bundle_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared_incoming_phone_number_toll_free_enum_emergency_status_enum.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared_incoming_phone_number_toll_free_enum_voice_receive_mode_enum.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberTollFreeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberTollFreeRequest:
    path_params: CreateIncomingPhoneNumberTollFreePathParams = dataclasses.field()
    security: CreateIncomingPhoneNumberTollFreeSecurity = dataclasses.field()
    request: Optional[CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberTollFreeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free: Optional[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree] = dataclasses.field(default=None)
    
