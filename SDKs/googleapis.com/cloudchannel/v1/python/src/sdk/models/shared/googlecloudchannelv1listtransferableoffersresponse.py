import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1transferableoffer as shared_googlecloudchannelv1transferableoffer


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListTransferableOffersResponse:
    r"""GoogleCloudChannelV1ListTransferableOffersResponse
    Response message for CloudChannelService.ListTransferableOffers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transferable_offers: Optional[list[shared_googlecloudchannelv1transferableoffer.GoogleCloudChannelV1TransferableOffer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferableOffers') }})
    
