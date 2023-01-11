import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RequestUtilization:
    r"""RequestUtilization
    Target scaling by request utilization. Only applicable in the App Engine flexible environment.
    """
    
    target_concurrent_requests: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetConcurrentRequests') }})
    target_request_count_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRequestCountPerSecond') }})
    
