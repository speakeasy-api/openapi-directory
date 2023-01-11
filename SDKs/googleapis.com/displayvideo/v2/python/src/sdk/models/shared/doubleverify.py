import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import doubleverifyappstarrating as shared_doubleverifyappstarrating
from ..shared import doubleverifybrandsafetycategories as shared_doubleverifybrandsafetycategories
from ..shared import doubleverifydisplayviewability as shared_doubleverifydisplayviewability
from ..shared import doubleverifyfraudinvalidtraffic as shared_doubleverifyfraudinvalidtraffic
from ..shared import doubleverifyvideoviewability as shared_doubleverifyvideoviewability

class DoubleVerifyAvoidedAgeRatingsEnum(str, Enum):
    AGE_RATING_UNSPECIFIED = "AGE_RATING_UNSPECIFIED"
    APP_AGE_RATE_UNKNOWN = "APP_AGE_RATE_UNKNOWN"
    APP_AGE_RATE_4_PLUS = "APP_AGE_RATE_4_PLUS"
    APP_AGE_RATE_9_PLUS = "APP_AGE_RATE_9_PLUS"
    APP_AGE_RATE_12_PLUS = "APP_AGE_RATE_12_PLUS"
    APP_AGE_RATE_17_PLUS = "APP_AGE_RATE_17_PLUS"
    APP_AGE_RATE_18_PLUS = "APP_AGE_RATE_18_PLUS"


@dataclass_json
@dataclasses.dataclass
class DoubleVerify:
    r"""DoubleVerify
    Details of DoubleVerify settings.
    """
    
    app_star_rating: Optional[shared_doubleverifyappstarrating.DoubleVerifyAppStarRating] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStarRating') }})
    avoided_age_ratings: Optional[list[DoubleVerifyAvoidedAgeRatingsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedAgeRatings') }})
    brand_safety_categories: Optional[shared_doubleverifybrandsafetycategories.DoubleVerifyBrandSafetyCategories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandSafetyCategories') }})
    custom_segment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSegmentId') }})
    display_viewability: Optional[shared_doubleverifydisplayviewability.DoubleVerifyDisplayViewability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayViewability') }})
    fraud_invalid_traffic: Optional[shared_doubleverifyfraudinvalidtraffic.DoubleVerifyFraudInvalidTraffic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fraudInvalidTraffic') }})
    video_viewability: Optional[shared_doubleverifyvideoviewability.DoubleVerifyVideoViewability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoViewability') }})
    
