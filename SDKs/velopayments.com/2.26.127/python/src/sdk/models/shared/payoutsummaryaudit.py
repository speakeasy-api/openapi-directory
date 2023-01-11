import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fxsummary as shared_fxsummary
from ..shared import payouttype_enum as shared_payouttype_enum
from ..shared import sourceaccountsummary as shared_sourceaccountsummary
from ..shared import payoutstatus_enum as shared_payoutstatus_enum


@dataclass_json
@dataclasses.dataclass
class PayoutSummaryAudit:
    payor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    payout_type: shared_payouttype_enum.PayoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutType') }})
    status: shared_payoutstatus_enum.PayoutStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime') }})
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fx_summaries: Optional[list[shared_fxsummary.FxSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    instructed_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedDateTime') }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    payout_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    source_account_summary: Optional[list[shared_sourceaccountsummary.SourceAccountSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountSummary') }})
    total_incomplete_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalIncompletePayments') }})
    total_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayments') }})
    total_returned_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReturnedPayments') }})
    total_withdrawn_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalWithdrawnPayments') }})
    withdrawn_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawnDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
