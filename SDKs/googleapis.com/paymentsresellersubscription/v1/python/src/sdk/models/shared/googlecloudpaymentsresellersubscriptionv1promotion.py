import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1duration as shared_googlecloudpaymentsresellersubscriptionv1duration
from ..shared import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails as shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails
from ..shared import googletypelocalizedtext as shared_googletypelocalizedtext

class GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Promotion:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Promotion
    A Promotion resource that defines a promotion for a subscription that can be resold.
    """
    
    applicable_products: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableProducts') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    free_trial_duration: Optional[shared_googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    promotion_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionType') }})
    region_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCodes') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    titles: Optional[list[shared_googletypelocalizedtext.GoogleTypeLocalizedText]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titles') }})
    
