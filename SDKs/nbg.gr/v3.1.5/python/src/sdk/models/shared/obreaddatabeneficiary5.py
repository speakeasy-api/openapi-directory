import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obbeneficiary5 as shared_obbeneficiary5


@dataclass_json
@dataclasses.dataclass
class ObReadDataBeneficiary5:
    beneficiary: Optional[list[shared_obbeneficiary5.ObBeneficiary5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    
