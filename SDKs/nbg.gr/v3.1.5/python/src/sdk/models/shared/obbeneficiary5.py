import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obbeneficiarytype1code_enum as shared_obbeneficiarytype1code_enum
from ..shared import obcashaccount5 as shared_obcashaccount5


@dataclass_json
@dataclasses.dataclass
class ObBeneficiary5:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    beneficiary_type: Optional[shared_obbeneficiarytype1code_enum.ObBeneficiaryType1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeneficiaryType') }})
    creditor_account: Optional[shared_obcashaccount5.ObCashAccount5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    
