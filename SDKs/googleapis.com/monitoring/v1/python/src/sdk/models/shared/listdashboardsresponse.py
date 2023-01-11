import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dashboard as shared_dashboard


@dataclass_json
@dataclasses.dataclass
class ListDashboardsResponse:
    r"""ListDashboardsResponse
    The ListDashboards request.
    """
    
    dashboards: Optional[list[shared_dashboard.Dashboard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboards') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
