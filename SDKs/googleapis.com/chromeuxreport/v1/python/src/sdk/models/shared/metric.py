import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bin as shared_bin
from ..shared import percentiles as shared_percentiles


@dataclass_json
@dataclasses.dataclass
class Metric:
    histogram: Optional[list[shared_bin.Bin]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogram') }})
    percentiles: Optional[shared_percentiles.Percentiles] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentiles') }})
    
