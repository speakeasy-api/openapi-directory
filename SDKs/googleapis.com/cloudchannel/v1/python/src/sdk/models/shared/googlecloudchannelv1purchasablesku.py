import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1sku as shared_googlecloudchannelv1sku


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1PurchasableSku:
    r"""GoogleCloudChannelV1PurchasableSku
    SKU that you can purchase. This is used in ListPurchasableSku API response.
    """
    
    sku: Optional[shared_googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
