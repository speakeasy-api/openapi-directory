import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reporterror as shared_reporterror


@dataclass_json
@dataclasses.dataclass
class ReportResponse:
    r"""ReportResponse
    Response message for the Report method.
    """
    
    report_errors: Optional[list[shared_reporterror.ReportError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportErrors') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    service_rollout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRolloutId') }})
    
