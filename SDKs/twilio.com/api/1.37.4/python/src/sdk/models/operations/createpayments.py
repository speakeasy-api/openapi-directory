import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import payments_enum_bank_account_type_enum as shared_payments_enum_bank_account_type_enum
from ..shared import payments_enum_payment_method_enum as shared_payments_enum_payment_method_enum
from ..shared import payments_enum_token_type_enum as shared_payments_enum_token_type_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_payments as shared_api_v2010_account_call_payments


CREATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreatePaymentsPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePaymentsCreatePaymentsRequest:
    idempotency_key: str = dataclasses.field(metadata={'form': { 'field_name': 'IdempotencyKey' }})
    status_callback: str = dataclasses.field(metadata={'form': { 'field_name': 'StatusCallback' }})
    bank_account_type: Optional[shared_payments_enum_bank_account_type_enum.PaymentsEnumBankAccountTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BankAccountType' }})
    charge_amount: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChargeAmount' }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Currency' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Description' }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Input' }})
    min_postal_code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MinPostalCodeLength' }})
    parameter: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Parameter' }})
    payment_connector: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PaymentConnector' }})
    payment_method: Optional[shared_payments_enum_payment_method_enum.PaymentsEnumPaymentMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PaymentMethod' }})
    postal_code: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostalCode' }})
    security_code: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SecurityCode' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    token_type: Optional[shared_payments_enum_token_type_enum.PaymentsEnumTokenTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TokenType' }})
    valid_card_types: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ValidCardTypes' }})
    

@dataclasses.dataclass
class CreatePaymentsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreatePaymentsRequest:
    path_params: CreatePaymentsPathParams = dataclasses.field()
    security: CreatePaymentsSecurity = dataclasses.field()
    request: Optional[CreatePaymentsCreatePaymentsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_payments: Optional[shared_api_v2010_account_call_payments.APIV2010AccountCallPayments] = dataclasses.field(default=None)
    
