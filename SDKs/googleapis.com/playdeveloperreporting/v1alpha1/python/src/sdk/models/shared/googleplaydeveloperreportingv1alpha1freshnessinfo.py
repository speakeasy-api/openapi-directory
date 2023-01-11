import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1freshnessinfofreshness as shared_googleplaydeveloperreportingv1alpha1freshnessinfofreshness


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1FreshnessInfo:
    r"""GooglePlayDeveloperReportingV1alpha1FreshnessInfo
    Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
    """
    
    freshnesses: Optional[list[shared_googleplaydeveloperreportingv1alpha1freshnessinfofreshness.GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnesses') }})
    
