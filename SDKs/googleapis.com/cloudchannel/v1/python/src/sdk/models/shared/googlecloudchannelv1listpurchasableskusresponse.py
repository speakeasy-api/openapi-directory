import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1purchasablesku as shared_googlecloudchannelv1purchasablesku


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListPurchasableSkusResponse:
    r"""GoogleCloudChannelV1ListPurchasableSkusResponse
    Response message for ListPurchasableSkus.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    purchasable_skus: Optional[list[shared_googlecloudchannelv1purchasablesku.GoogleCloudChannelV1PurchasableSku]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasableSkus') }})
    
