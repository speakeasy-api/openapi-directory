import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import incoming_phone_number_mobile_enum_address_requirement_enum as shared_incoming_phone_number_mobile_enum_address_requirement_enum
from ..shared import incoming_phone_number_mobile_enum_emergency_address_status_enum as shared_incoming_phone_number_mobile_enum_emergency_address_status_enum
from ..shared import incoming_phone_number_mobile_enum_emergency_status_enum as shared_incoming_phone_number_mobile_enum_emergency_status_enum
from ..shared import incoming_phone_number_mobile_enum_voice_receive_mode_enum as shared_incoming_phone_number_mobile_enum_voice_receive_mode_enum


@dataclass_json
@dataclasses.dataclass
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities:
    r"""APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities
    Indicate if a phone can receive calls or messages
    """
    
    fax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    mms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms') }})
    sms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    address_requirements: Optional[shared_incoming_phone_number_mobile_enum_address_requirement_enum.IncomingPhoneNumberMobileEnumAddressRequirementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_requirements') }})
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_sid') }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    beta: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beta') }})
    bundle_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundle_sid') }})
    capabilities: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    emergency_address_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_address_sid') }})
    emergency_address_status: Optional[shared_incoming_phone_number_mobile_enum_emergency_address_status_enum.IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_address_status') }})
    emergency_status: Optional[shared_incoming_phone_number_mobile_enum_emergency_status_enum.IncomingPhoneNumberMobileEnumEmergencyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_status') }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    identity_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity_sid') }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_application_sid') }})
    sms_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_method') }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_url') }})
    sms_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_method') }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_url') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trunk_sid') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    voice_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_application_sid') }})
    voice_caller_id_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_caller_id_lookup') }})
    voice_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_method') }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_url') }})
    voice_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_method') }})
    voice_receive_mode: Optional[shared_incoming_phone_number_mobile_enum_voice_receive_mode_enum.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_receive_mode') }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_url') }})
    
