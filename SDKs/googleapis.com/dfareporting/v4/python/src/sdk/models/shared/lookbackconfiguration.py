import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LookbackConfiguration:
    r"""LookbackConfiguration
    Lookback configuration settings.
    """
    
    click_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickDuration') }})
    post_impression_activities_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postImpressionActivitiesDuration') }})
    
