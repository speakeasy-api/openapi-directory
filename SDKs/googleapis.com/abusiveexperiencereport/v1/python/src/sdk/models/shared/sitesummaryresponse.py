import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SiteSummaryResponseAbusiveStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PASSING = "PASSING"
    FAILING = "FAILING"

class SiteSummaryResponseFilterStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ON = "ON"
    OFF = "OFF"
    PAUSED = "PAUSED"
    PENDING = "PENDING"


@dataclass_json
@dataclasses.dataclass
class SiteSummaryResponse:
    r"""SiteSummaryResponse
    Response message for GetSiteSummary.
    """
    
    abusive_status: Optional[SiteSummaryResponseAbusiveStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abusiveStatus') }})
    enforcement_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcementTime') }})
    filter_status: Optional[SiteSummaryResponseFilterStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterStatus') }})
    last_change_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChangeTime') }})
    report_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportUrl') }})
    reviewed_site: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewedSite') }})
    under_review: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underReview') }})
    
