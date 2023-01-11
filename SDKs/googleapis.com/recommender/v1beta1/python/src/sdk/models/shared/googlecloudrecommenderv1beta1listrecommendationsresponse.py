import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1recommendation as shared_googlecloudrecommenderv1beta1recommendation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1ListRecommendationsResponse:
    r"""GoogleCloudRecommenderV1beta1ListRecommendationsResponse
    Response to the `ListRecommendations` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    recommendations: Optional[list[shared_googlecloudrecommenderv1beta1recommendation.GoogleCloudRecommenderV1beta1Recommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    
