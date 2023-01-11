import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1beta1freshnessinfofreshness as shared_googleplaydeveloperreportingv1beta1freshnessinfofreshness


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1FreshnessInfo:
    r"""GooglePlayDeveloperReportingV1beta1FreshnessInfo
    Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
    """
    
    freshnesses: Optional[list[shared_googleplaydeveloperreportingv1beta1freshnessinfofreshness.GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnesses') }})
    
