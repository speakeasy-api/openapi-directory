import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymenteventresponsev3 as shared_paymenteventresponsev3
from ..shared import paymentauditcurrencyv3_enum as shared_paymentauditcurrencyv3_enum

class PaymentResponseV3FundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class PaymentResponseV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    REJECTED = "REJECTED"
    ACCEPTED_BY_RAILS = "ACCEPTED_BY_RAILS"
    CONFIRMED = "CONFIRMED"
    FAILED = "FAILED"
    WITHDRAWN = "WITHDRAWN"


@dataclass_json
@dataclasses.dataclass
class PaymentResponseV3:
    events: list[shared_paymenteventresponsev3.PaymentEventResponseV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    funding_status: PaymentResponseV3FundingStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStatus') }})
    payee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payment_amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentAmount') }})
    payment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    quote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    rails_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsId') }})
    source_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    status: PaymentResponseV3StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    filename_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filenameReference') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    individual_identification_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualIdentificationNumber') }})
    inverted_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertedRate') }})
    payment_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannelId') }})
    payment_channel_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannelName') }})
    payment_currency: Optional[shared_paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    payment_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMemo') }})
    payor_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    payor_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    rails_batch_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsBatchId') }})
    rails_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsPaymentId') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    rejection_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionReason') }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    return_cost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnCost') }})
    return_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnReason') }})
    routing_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    source_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    source_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAmount') }})
    source_currency: Optional[shared_paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    trace_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceNumber') }})
    
