import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import screenviewdata as shared_screenviewdata
from ..shared import customdimension as shared_customdimension
from ..shared import ecommercedata as shared_ecommercedata
from ..shared import eventdata as shared_eventdata
from ..shared import goalsetdata as shared_goalsetdata
from ..shared import pageviewdata as shared_pageviewdata

class ActivityActivityTypeEnum(str, Enum):
    ACTIVITY_TYPE_UNSPECIFIED = "ACTIVITY_TYPE_UNSPECIFIED"
    PAGEVIEW = "PAGEVIEW"
    SCREENVIEW = "SCREENVIEW"
    GOAL = "GOAL"
    ECOMMERCE = "ECOMMERCE"
    EVENT = "EVENT"


@dataclass_json
@dataclasses.dataclass
class Activity:
    r"""Activity
    An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
    """
    
    activity_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTime') }})
    activity_type: Optional[ActivityActivityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    appview: Optional[shared_screenviewdata.ScreenviewData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appview') }})
    campaign: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign') }})
    channel_grouping: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelGrouping') }})
    custom_dimension: Optional[list[shared_customdimension.CustomDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDimension') }})
    ecommerce: Optional[shared_ecommercedata.EcommerceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecommerce') }})
    event: Optional[shared_eventdata.EventData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    goals: Optional[shared_goalsetdata.GoalSetData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goals') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    landing_page_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPagePath') }})
    medium: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    pageview: Optional[shared_pageviewdata.PageviewData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageview') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
