import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1purchasableoffer as shared_googlecloudchannelv1purchasableoffer


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListPurchasableOffersResponse:
    r"""GoogleCloudChannelV1ListPurchasableOffersResponse
    Response message for ListPurchasableOffers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    purchasable_offers: Optional[list[shared_googlecloudchannelv1purchasableoffer.GoogleCloudChannelV1PurchasableOffer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasableOffers') }})
    
