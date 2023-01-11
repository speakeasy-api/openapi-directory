import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionoffer as shared_subscriptionoffer


@dataclass_json
@dataclasses.dataclass
class ListSubscriptionOffersResponse:
    r"""ListSubscriptionOffersResponse
    Response message for ListSubscriptionOffers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subscription_offers: Optional[list[shared_subscriptionoffer.SubscriptionOffer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionOffers') }})
    
