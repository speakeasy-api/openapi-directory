import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import performancereport as shared_performancereport


@dataclass_json
@dataclasses.dataclass
class PerformanceReportList:
    r"""PerformanceReportList
    The configuration data for an Ad Exchange performance report list.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    performance_report: Optional[list[shared_performancereport.PerformanceReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceReport') }})
    
