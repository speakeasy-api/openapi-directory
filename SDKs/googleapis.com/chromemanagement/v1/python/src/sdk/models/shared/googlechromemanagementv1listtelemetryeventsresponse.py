import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1telemetryevent as shared_googlechromemanagementv1telemetryevent


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1ListTelemetryEventsResponse:
    r"""GoogleChromeManagementV1ListTelemetryEventsResponse
    Response message for listing telemetry events for a customer.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    telemetry_events: Optional[list[shared_googlechromemanagementv1telemetryevent.GoogleChromeManagementV1TelemetryEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryEvents') }})
    
