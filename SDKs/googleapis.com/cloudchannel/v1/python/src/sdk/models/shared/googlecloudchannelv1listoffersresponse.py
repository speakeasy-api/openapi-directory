import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1offer as shared_googlecloudchannelv1offer


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListOffersResponse:
    r"""GoogleCloudChannelV1ListOffersResponse
    Response message for ListOffers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    offers: Optional[list[shared_googlecloudchannelv1offer.GoogleCloudChannelV1Offer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    
