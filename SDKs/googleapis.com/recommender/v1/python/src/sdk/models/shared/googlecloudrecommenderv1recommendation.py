import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1impact as shared_googlecloudrecommenderv1impact
from ..shared import googlecloudrecommenderv1recommendationinsightreference as shared_googlecloudrecommenderv1recommendationinsightreference
from ..shared import googlecloudrecommenderv1recommendationcontent as shared_googlecloudrecommenderv1recommendationcontent
from ..shared import googlecloudrecommenderv1recommendationstateinfo as shared_googlecloudrecommenderv1recommendationstateinfo

class GoogleCloudRecommenderV1RecommendationPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    P4 = "P4"
    P3 = "P3"
    P2 = "P2"
    P1 = "P1"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1Recommendation:
    r"""GoogleCloudRecommenderV1Recommendation
    A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
    """
    
    additional_impact: Optional[list[shared_googlecloudrecommenderv1impact.GoogleCloudRecommenderV1Impact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalImpact') }})
    associated_insights: Optional[list[shared_googlecloudrecommenderv1recommendationinsightreference.GoogleCloudRecommenderV1RecommendationInsightReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedInsights') }})
    content: Optional[shared_googlecloudrecommenderv1recommendationcontent.GoogleCloudRecommenderV1RecommendationContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    last_refresh_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_impact: Optional[shared_googlecloudrecommenderv1impact.GoogleCloudRecommenderV1Impact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryImpact') }})
    priority: Optional[GoogleCloudRecommenderV1RecommendationPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    recommender_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderSubtype') }})
    state_info: Optional[shared_googlecloudrecommenderv1recommendationstateinfo.GoogleCloudRecommenderV1RecommendationStateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateInfo') }})
    xor_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xorGroupId') }})
    
