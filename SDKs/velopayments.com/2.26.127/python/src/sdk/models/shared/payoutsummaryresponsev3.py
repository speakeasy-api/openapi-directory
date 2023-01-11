import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceptedpaymentv3 as shared_acceptedpaymentv3
from ..shared import sourceaccountv3 as shared_sourceaccountv3
from ..shared import quotefxsummaryv3 as shared_quotefxsummaryv3
from ..shared import rejectedpaymentv3 as shared_rejectedpaymentv3


@dataclass_json
@dataclasses.dataclass
class PayoutSummaryResponseV3:
    accepted_payments: list[shared_acceptedpaymentv3.AcceptedPaymentV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedPayments') }})
    accounts: list[shared_sourceaccountv3.SourceAccountV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    fx_summaries: list[shared_quotefxsummaryv3.QuoteFxSummaryV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    payments_withdrawn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsWithdrawn') }})
    rejected_payments: list[shared_rejectedpaymentv3.RejectedPaymentV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectedPayments') }})
    payments_accepted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAccepted') }})
    payments_rejected: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsRejected') }})
    payments_submitted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsSubmitted') }})
    payout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
