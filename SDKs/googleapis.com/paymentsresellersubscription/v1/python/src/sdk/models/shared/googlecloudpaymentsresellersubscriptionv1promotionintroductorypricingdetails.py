import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec as shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec
from ..shared import googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec as shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
    The details of a introductory pricing promotion.
    """
    
    introductory_pricing_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingSpecs') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput
    The details of a introductory pricing promotion.
    """
    
    introductory_pricing_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricingSpecs') }})
    
