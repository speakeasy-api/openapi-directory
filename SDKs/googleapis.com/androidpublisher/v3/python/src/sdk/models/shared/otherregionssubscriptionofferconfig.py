import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OtherRegionsSubscriptionOfferConfig:
    r"""OtherRegionsSubscriptionOfferConfig
    Configuration for any new locations Play may launch in specified on a subscription offer.
    """
    
    other_regions_new_subscriber_availability: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsNewSubscriberAvailability') }})
    
