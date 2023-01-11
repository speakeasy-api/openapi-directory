import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SplitCommissionDetails:
    percentage_of_commission: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage_of_commission') }})
    commission_arrangement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_arrangement') }})
    line_of_coverage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_of_coverage') }})
    
