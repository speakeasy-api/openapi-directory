import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1amount as shared_googlecloudpaymentsresellersubscriptionv1amount


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
    The duration of an introductory pricing promotion.
    """
    
    discount_amount: Optional[shared_googlecloudpaymentsresellersubscriptionv1amount.GoogleCloudPaymentsResellerSubscriptionV1Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_ratio_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountRatioMicros') }})
    recurrence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceCount') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
    The duration of an introductory pricing promotion.
    """
    
    discount_amount: Optional[shared_googlecloudpaymentsresellersubscriptionv1amount.GoogleCloudPaymentsResellerSubscriptionV1Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    
