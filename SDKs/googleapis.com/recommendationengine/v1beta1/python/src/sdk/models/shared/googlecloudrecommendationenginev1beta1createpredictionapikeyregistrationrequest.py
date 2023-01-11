import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1predictionapikeyregistration as shared_googlecloudrecommendationenginev1beta1predictionapikeyregistration


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest:
    r"""GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest
    Request message for the `CreatePredictionApiKeyRegistration` method.
    """
    
    prediction_api_key_registration: Optional[shared_googlecloudrecommendationenginev1beta1predictionapikeyregistration.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionApiKeyRegistration') }})
    
