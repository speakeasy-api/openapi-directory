import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentauditcurrency_enum as shared_paymentauditcurrency_enum

class FxSummaryFundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class FxSummaryStatusEnum(str, Enum):
    UNQUOTED = "UNQUOTED"
    QUOTED = "QUOTED"
    EXPIRED = "EXPIRED"
    EXECUTED = "EXECUTED"


@dataclass_json
@dataclasses.dataclass
class FxSummary:
    creation_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: FxSummaryFundingStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStatus') }})
    inverted_rate: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertedRate') }})
    quote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    rate: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    status: FxSummaryStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_cost: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCost') }})
    total_payment_amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPaymentAmount') }})
    payment_currency: Optional[shared_paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    source_currency: Optional[shared_paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    
