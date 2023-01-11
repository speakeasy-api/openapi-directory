import dataclasses
from typing import Optional
from enum import Enum
from ..shared import hosted_number_order_enum_verification_type_enum as shared_hosted_number_order_enum_verification_type_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_hosted_number_order as shared_preview_hosted_numbers_hosted_number_order


CREATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest:
    phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    sms_capability: bool = dataclasses.field(metadata={'form': { 'field_name': 'SmsCapability' }})
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sms_application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    verification_document_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationDocumentSid' }})
    verification_type: Optional[shared_hosted_number_order_enum_verification_type_enum.HostedNumberOrderEnumVerificationTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationType' }})
    

@dataclasses.dataclass
class CreateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateHostedNumbersHostedNumberOrderRequest:
    security: CreateHostedNumbersHostedNumberOrderSecurity = dataclasses.field()
    request: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateHostedNumbersHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_hosted_number_order: Optional[shared_preview_hosted_numbers_hosted_number_order.PreviewHostedNumbersHostedNumberOrder] = dataclasses.field(default=None)
    
