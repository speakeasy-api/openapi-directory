import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obexternallimittype1code_enum as shared_obexternallimittype1code_enum


@dataclass_json
@dataclasses.dataclass
class ObCreditLine1:
    included: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Included') }})
    amount: Optional[shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    type: Optional[shared_obexternallimittype1code_enum.ObExternalLimitType1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
