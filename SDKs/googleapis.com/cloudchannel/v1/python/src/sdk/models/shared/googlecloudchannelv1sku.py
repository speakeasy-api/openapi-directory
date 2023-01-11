import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1marketinginfo as shared_googlecloudchannelv1marketinginfo
from ..shared import googlecloudchannelv1product as shared_googlecloudchannelv1product


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Sku:
    r"""GoogleCloudChannelV1Sku
    Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
    """
    
    marketing_info: Optional[shared_googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product: Optional[shared_googlecloudchannelv1product.GoogleCloudChannelV1Product] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
