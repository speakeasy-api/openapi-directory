import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicsli as shared_basicsli
from ..shared import requestbasedsli as shared_requestbasedsli


@dataclass_json
@dataclasses.dataclass
class PerformanceThreshold:
    r"""PerformanceThreshold
    A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
    """
    
    basic_sli_performance: Optional[shared_basicsli.BasicSli] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicSliPerformance') }})
    performance: Optional[shared_requestbasedsli.RequestBasedSli] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performance') }})
    threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
