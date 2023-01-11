import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import institutionalidentification2 as shared_institutionalidentification2


@dataclass_json
@dataclasses.dataclass
class DebtorAgent7Ch:
    r"""DebtorAgent7Ch
    Reference to an debtorAgent by either
      * BIC, of the debtor bank, or
      * IID, of the debtor bank
    adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
    
    """
    
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iid: Optional[shared_institutionalidentification2.InstitutionalIdentification2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iid') }})
    
