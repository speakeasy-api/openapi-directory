import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1offer as shared_googlecloudchannelv1offer


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1TransferableOffer:
    r"""GoogleCloudChannelV1TransferableOffer
    TransferableOffer represents an Offer that can be used in Transfer. Read-only.
    """
    
    offer: Optional[shared_googlecloudchannelv1offer.GoogleCloudChannelV1Offer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    
