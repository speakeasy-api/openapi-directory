import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1deviceauecountreport as shared_googlechromemanagementv1deviceauecountreport


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse:
    r"""GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
    Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
    """
    
    device_aue_count_reports: Optional[list[shared_googlechromemanagementv1deviceauecountreport.GoogleChromeManagementV1DeviceAueCountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceAueCountReports') }})
    
