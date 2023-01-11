import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagemetrics as shared_usagemetrics


@dataclass_json
@dataclasses.dataclass
class RuntimeInfo:
    r"""RuntimeInfo
    Runtime information about workload execution.
    """
    
    approximate_usage: Optional[shared_usagemetrics.UsageMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateUsage') }})
    diagnostic_output_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticOutputUri') }})
    endpoints: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    output_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUri') }})
    

@dataclass_json
@dataclasses.dataclass
class RuntimeInfoInput:
    r"""RuntimeInfoInput
    Runtime information about workload execution.
    """
    
    approximate_usage: Optional[shared_usagemetrics.UsageMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateUsage') }})
    
