import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoutcompanyv3 as shared_payoutcompanyv3
from ..shared import payoutindividualv3 as shared_payoutindividualv3


@dataclass_json
@dataclasses.dataclass
class PayoutPayeeV3:
    r"""PayoutPayeeV3
    Payee data associated with a payment. Either individual or company must be populated
    """
    
    payee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    company: Optional[shared_payoutcompanyv3.PayoutCompanyV3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    individual: Optional[shared_payoutindividualv3.PayoutIndividualV3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    
