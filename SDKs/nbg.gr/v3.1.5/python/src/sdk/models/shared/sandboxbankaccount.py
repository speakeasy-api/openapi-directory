import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sandboxbeneficiary as shared_sandboxbeneficiary
from ..shared import sandboxbankaccountinfo as shared_sandboxbankaccountinfo
from ..shared import sandboxparty as shared_sandboxparty
from ..shared import sandboxscheduledpayment as shared_sandboxscheduledpayment
from ..shared import sandboxstandingorder as shared_sandboxstandingorder
from ..shared import sandboxstatement as shared_sandboxstatement
from ..shared import sandboxtransaction as shared_sandboxtransaction


@dataclass_json
@dataclasses.dataclass
class SandboxBankAccount:
    r"""SandboxBankAccount
    Sandbox bank account
    """
    
    beneficiaries: Optional[list[shared_sandboxbeneficiary.SandboxBeneficiary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beneficiaries') }})
    info: Optional[shared_sandboxbankaccountinfo.SandboxBankAccountInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    party: Optional[shared_sandboxparty.SandboxParty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    scheduled_payments: Optional[list[shared_sandboxscheduledpayment.SandboxScheduledPayment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledPayments') }})
    standing_orders: Optional[list[shared_sandboxstandingorder.SandboxStandingOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standingOrders') }})
    statements: Optional[list[shared_sandboxstatement.SandboxStatement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    transactions: Optional[list[shared_sandboxtransaction.SandboxTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
