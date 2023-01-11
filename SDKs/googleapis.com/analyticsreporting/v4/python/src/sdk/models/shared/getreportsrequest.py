import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportrequest as shared_reportrequest


@dataclass_json
@dataclasses.dataclass
class GetReportsRequest:
    r"""GetReportsRequest
    The batch request containing multiple report request.
    """
    
    report_requests: Optional[list[shared_reportrequest.ReportRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportRequests') }})
    use_resource_quotas: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useResourceQuotas') }})
    
