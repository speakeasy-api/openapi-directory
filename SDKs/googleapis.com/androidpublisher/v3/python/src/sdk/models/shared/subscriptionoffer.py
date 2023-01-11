import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offertag as shared_offertag
from ..shared import otherregionssubscriptionofferconfig as shared_otherregionssubscriptionofferconfig
from ..shared import subscriptionofferphase as shared_subscriptionofferphase
from ..shared import regionalsubscriptionofferconfig as shared_regionalsubscriptionofferconfig
from ..shared import subscriptionoffertargeting as shared_subscriptionoffertargeting

class SubscriptionOfferStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class SubscriptionOffer:
    r"""SubscriptionOffer
    A single, temporary offer
    """
    
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_tags: Optional[list[shared_offertag.OfferTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[shared_otherregionssubscriptionofferconfig.OtherRegionsSubscriptionOfferConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    phases: Optional[list[shared_subscriptionofferphase.SubscriptionOfferPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    regional_configs: Optional[list[shared_regionalsubscriptionofferconfig.RegionalSubscriptionOfferConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    state: Optional[SubscriptionOfferStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    targeting: Optional[shared_subscriptionoffertargeting.SubscriptionOfferTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscriptionOfferInput:
    r"""SubscriptionOfferInput
    A single, temporary offer
    """
    
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_tags: Optional[list[shared_offertag.OfferTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[shared_otherregionssubscriptionofferconfig.OtherRegionsSubscriptionOfferConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    phases: Optional[list[shared_subscriptionofferphase.SubscriptionOfferPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    regional_configs: Optional[list[shared_regionalsubscriptionofferconfig.RegionalSubscriptionOfferConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    targeting: Optional[shared_subscriptionoffertargeting.SubscriptionOfferTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
