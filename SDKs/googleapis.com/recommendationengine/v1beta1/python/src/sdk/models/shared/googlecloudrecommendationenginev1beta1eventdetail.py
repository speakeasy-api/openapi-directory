import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1featuremap as shared_googlecloudrecommendationenginev1beta1featuremap


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1EventDetail:
    r"""GoogleCloudRecommendationengineV1beta1EventDetail
    User event details shared by all recommendation types.
    """
    
    event_attributes: Optional[shared_googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAttributes') }})
    experiment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentIds') }})
    page_view_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageViewId') }})
    recommendation_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationToken') }})
    referrer_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrerUri') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
