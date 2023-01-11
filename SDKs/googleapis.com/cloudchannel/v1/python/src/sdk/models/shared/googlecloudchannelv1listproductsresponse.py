import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1product as shared_googlecloudchannelv1product


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListProductsResponse:
    r"""GoogleCloudChannelV1ListProductsResponse
    Response message for ListProducts.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    products: Optional[list[shared_googlecloudchannelv1product.GoogleCloudChannelV1Product]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
