import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platformsummary as shared_platformsummary


@dataclass_json
@dataclasses.dataclass
class SiteSummaryResponse:
    r"""SiteSummaryResponse
    Response message for GetSiteSummary.
    """
    
    desktop_summary: Optional[shared_platformsummary.PlatformSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopSummary') }})
    mobile_summary: Optional[shared_platformsummary.PlatformSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileSummary') }})
    reviewed_site: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewedSite') }})
    
