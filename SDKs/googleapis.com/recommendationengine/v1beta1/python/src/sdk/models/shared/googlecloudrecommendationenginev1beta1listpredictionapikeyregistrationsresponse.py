import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1predictionapikeyregistration as shared_googlecloudrecommendationenginev1beta1predictionapikeyregistration


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse
    Response message for the `ListPredictionApiKeyRegistrations`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    prediction_api_key_registrations: Optional[list[shared_googlecloudrecommendationenginev1beta1predictionapikeyregistration.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionApiKeyRegistrations') }})
    
