import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1predictresponsepredictionresult as shared_googlecloudrecommendationenginev1beta1predictresponsepredictionresult


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1PredictResponse:
    r"""GoogleCloudRecommendationengineV1beta1PredictResponse
    Response message for predict method.
    """
    
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    items_missing_in_catalog: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsMissingInCatalog') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    recommendation_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationToken') }})
    results: Optional[list[shared_googlecloudrecommendationenginev1beta1predictresponsepredictionresult.GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
