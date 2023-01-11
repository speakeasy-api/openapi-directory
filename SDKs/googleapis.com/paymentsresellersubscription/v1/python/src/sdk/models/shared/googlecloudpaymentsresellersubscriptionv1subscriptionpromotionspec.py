import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1duration as shared_googlecloudpaymentsresellersubscriptionv1duration
from ..shared import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails as shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails
from ..shared import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails as shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum(str, Enum):
    PROMOTION_TYPE_UNSPECIFIED = "PROMOTION_TYPE_UNSPECIFIED"
    PROMOTION_TYPE_FREE_TRIAL = "PROMOTION_TYPE_FREE_TRIAL"
    PROMOTION_TYPE_INTRODUCTORY_PRICING = "PROMOTION_TYPE_INTRODUCTORY_PRICING"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
    Describes the spec for one promotion.
    """
    
    free_trial_duration: Optional[shared_googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    promotion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotion') }})
    type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput
    Describes the spec for one promotion.
    """
    
    free_trial_duration: Optional[shared_googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialDuration') }})
    introductory_pricing_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingDetails') }})
    promotion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotion') }})
    
