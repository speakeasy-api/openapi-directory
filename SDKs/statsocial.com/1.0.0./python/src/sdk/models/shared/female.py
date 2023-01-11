import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statistical_info_f as shared_statistical_info_f


@dataclass_json
@dataclasses.dataclass
class Female:
    average: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    multiplicity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiplicity') }})
    percentile: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentile') }})
    statistical_info: Optional[shared_statistical_info_f.StatisticalInfoF] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistical_info') }})
    stdev: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stdev') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
