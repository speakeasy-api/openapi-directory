import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class BatchUndeleteAlertsResponse:
    r"""BatchUndeleteAlertsResponse
    Response to batch undelete operation on alerts.
    """
    
    failed_alert_status: Optional[dict[str, shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedAlertStatus') }})
    success_alert_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlertIds') }})
    
