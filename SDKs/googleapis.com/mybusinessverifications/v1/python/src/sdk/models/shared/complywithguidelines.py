import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ComplyWithGuidelinesRecommendationReasonEnum(str, Enum):
    RECOMMENDATION_REASON_UNSPECIFIED = "RECOMMENDATION_REASON_UNSPECIFIED"
    BUSINESS_LOCATION_SUSPENDED = "BUSINESS_LOCATION_SUSPENDED"
    BUSINESS_LOCATION_DISABLED = "BUSINESS_LOCATION_DISABLED"


@dataclass_json
@dataclasses.dataclass
class ComplyWithGuidelines:
    r"""ComplyWithGuidelines
    Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
    """
    
    recommendation_reason: Optional[ComplyWithGuidelinesRecommendationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationReason') }})
    
