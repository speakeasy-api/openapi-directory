import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1insightrecommendationreference as shared_googlecloudrecommenderv1beta1insightrecommendationreference
from ..shared import googlecloudrecommenderv1beta1insightstateinfo as shared_googlecloudrecommenderv1beta1insightstateinfo

class GoogleCloudRecommenderV1beta1InsightCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"

class GoogleCloudRecommenderV1beta1InsightSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1Insight:
    r"""GoogleCloudRecommenderV1beta1Insight
    An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
    """
    
    associated_recommendations: Optional[list[shared_googlecloudrecommenderv1beta1insightrecommendationreference.GoogleCloudRecommenderV1beta1InsightRecommendationReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedRecommendations') }})
    category: Optional[GoogleCloudRecommenderV1beta1InsightCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    content: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    insight_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightSubtype') }})
    last_refresh_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observation_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationPeriod') }})
    severity: Optional[GoogleCloudRecommenderV1beta1InsightSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    state_info: Optional[shared_googlecloudrecommenderv1beta1insightstateinfo.GoogleCloudRecommenderV1beta1InsightStateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateInfo') }})
    target_resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResources') }})
    
