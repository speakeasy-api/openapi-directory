import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fxsummaryv3 as shared_fxsummaryv3
from ..shared import sourceaccountsummaryv3 as shared_sourceaccountsummaryv3
from ..shared import payoutstatusv3_enum as shared_payoutstatusv3_enum


@dataclass_json
@dataclasses.dataclass
class PayoutSummaryAuditV3:
    payout_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    status: shared_payoutstatusv3_enum.PayoutStatusV3Enum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime') }})
    fx_summaries: Optional[list[shared_fxsummaryv3.FxSummaryV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    instructed_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedDateTime') }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payout_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    source_account_summary: Optional[list[shared_sourceaccountsummaryv3.SourceAccountSummaryV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountSummary') }})
    total_failed_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFailedPayments') }})
    total_incomplete_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalIncompletePayments') }})
    total_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayments') }})
    withdrawn_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawnDateTime') }})
    
