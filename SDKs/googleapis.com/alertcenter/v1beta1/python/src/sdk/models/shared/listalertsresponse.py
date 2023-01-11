import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alert as shared_alert


@dataclass_json
@dataclasses.dataclass
class ListAlertsResponse:
    r"""ListAlertsResponse
    Response message for an alert listing request.
    """
    
    alerts: Optional[list[shared_alert.Alert]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
