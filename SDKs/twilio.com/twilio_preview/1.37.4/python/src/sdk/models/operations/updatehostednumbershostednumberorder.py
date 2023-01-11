import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import hosted_number_order_enum_status_enum as shared_hosted_number_order_enum_status_enum
from ..shared import hosted_number_order_enum_verification_type_enum as shared_hosted_number_order_enum_verification_type_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_hosted_number_order as shared_preview_hosted_numbers_hosted_number_order


UPDATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateHostedNumbersHostedNumberOrderPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest:
    call_delay: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallDelay' }})
    cc_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    extension: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared_hosted_number_order_enum_status_enum.HostedNumberOrderEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationCode' }})
    verification_document_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationDocumentSid' }})
    verification_type: Optional[shared_hosted_number_order_enum_verification_type_enum.HostedNumberOrderEnumVerificationTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationType' }})
    

@dataclasses.dataclass
class UpdateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateHostedNumbersHostedNumberOrderRequest:
    path_params: UpdateHostedNumbersHostedNumberOrderPathParams = dataclasses.field()
    security: UpdateHostedNumbersHostedNumberOrderSecurity = dataclasses.field()
    request: Optional[UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateHostedNumbersHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_hosted_number_order: Optional[shared_preview_hosted_numbers_hosted_number_order.PreviewHostedNumbersHostedNumberOrder] = dataclasses.field(default=None)
    
