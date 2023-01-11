import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1media as shared_googlecloudchannelv1media


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1MarketingInfo:
    r"""GoogleCloudChannelV1MarketingInfo
    Represents the marketing information for a Product, SKU or Offer.
    """
    
    default_logo: Optional[shared_googlecloudchannelv1media.GoogleCloudChannelV1Media] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLogo') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
