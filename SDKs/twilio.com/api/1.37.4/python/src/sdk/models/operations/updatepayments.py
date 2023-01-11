import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import payments_enum_capture_enum as shared_payments_enum_capture_enum
from ..shared import payments_enum_status_enum as shared_payments_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_payments as shared_api_v2010_account_call_payments


UPDATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdatePaymentsPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePaymentsUpdatePaymentsRequest:
    idempotency_key: str = dataclasses.field(metadata={'form': { 'field_name': 'IdempotencyKey' }})
    status_callback: str = dataclasses.field(metadata={'form': { 'field_name': 'StatusCallback' }})
    capture: Optional[shared_payments_enum_capture_enum.PaymentsEnumCaptureEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Capture' }})
    status: Optional[shared_payments_enum_status_enum.PaymentsEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdatePaymentsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdatePaymentsRequest:
    path_params: UpdatePaymentsPathParams = dataclasses.field()
    security: UpdatePaymentsSecurity = dataclasses.field()
    request: Optional[UpdatePaymentsUpdatePaymentsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_payments: Optional[shared_api_v2010_account_call_payments.APIV2010AccountCallPayments] = dataclasses.field(default=None)
    
