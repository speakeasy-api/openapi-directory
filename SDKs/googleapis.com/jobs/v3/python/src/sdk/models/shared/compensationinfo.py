import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compensationrange as shared_compensationrange
from ..shared import compensationentry as shared_compensationentry


@dataclass_json
@dataclasses.dataclass
class CompensationInfo:
    r"""CompensationInfo
    Job compensation details.
    """
    
    annualized_base_compensation_range: Optional[shared_compensationrange.CompensationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annualizedBaseCompensationRange') }})
    annualized_total_compensation_range: Optional[shared_compensationrange.CompensationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annualizedTotalCompensationRange') }})
    entries: Optional[list[shared_compensationentry.CompensationEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
