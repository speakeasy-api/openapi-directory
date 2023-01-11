import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import businesscallsinsights as shared_businesscallsinsights


@dataclass_json
@dataclasses.dataclass
class ListBusinessCallsInsightsResponse:
    r"""ListBusinessCallsInsightsResponse
    Response message for ListBusinessCallsInsights.
    """
    
    business_calls_insights: Optional[list[shared_businesscallsinsights.BusinessCallsInsights]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessCallsInsights') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
