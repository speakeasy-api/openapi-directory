import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postaladdress6_ch as shared_postaladdress6_ch
from ..shared import institutionalidentification2 as shared_institutionalidentification2


@dataclass_json
@dataclasses.dataclass
class CreditorAgent7Ch:
    r"""CreditorAgent7Ch
    Reference to an creditorAgent by either
      * BIC, of the creditor bank, or
      * IID, of the creditor bank, or
      * IID and optional name and address of the creditor bank or
      * Name and address of the creditor bank
    adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
    
    """
    
    address: Optional[shared_postaladdress6_ch.PostalAddress6Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iid: Optional[shared_institutionalidentification2.InstitutionalIdentification2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
