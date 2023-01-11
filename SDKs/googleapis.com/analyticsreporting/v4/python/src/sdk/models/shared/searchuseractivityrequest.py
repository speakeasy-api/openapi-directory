import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange
from ..shared import user as shared_user

class SearchUserActivityRequestActivityTypesEnum(str, Enum):
    ACTIVITY_TYPE_UNSPECIFIED = "ACTIVITY_TYPE_UNSPECIFIED"
    PAGEVIEW = "PAGEVIEW"
    SCREENVIEW = "SCREENVIEW"
    GOAL = "GOAL"
    ECOMMERCE = "ECOMMERCE"
    EVENT = "EVENT"


@dataclass_json
@dataclasses.dataclass
class SearchUserActivityRequest:
    r"""SearchUserActivityRequest
    The request to fetch User Report from Reporting API `userActivity:get` call.
    """
    
    activity_types: Optional[list[SearchUserActivityRequestActivityTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTypes') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    view_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewId') }})
    
