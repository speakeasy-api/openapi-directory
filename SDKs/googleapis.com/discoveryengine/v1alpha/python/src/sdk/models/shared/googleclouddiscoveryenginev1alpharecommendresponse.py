import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alpharecommendresponserecommendationresult as shared_googleclouddiscoveryenginev1alpharecommendresponserecommendationresult


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaRecommendResponse:
    r"""GoogleCloudDiscoveryengineV1alphaRecommendResponse
    Response message for Recommend method.
    """
    
    attribution_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    missing_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingIds') }})
    results: Optional[list[shared_googleclouddiscoveryenginev1alpharecommendresponserecommendationresult.GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
