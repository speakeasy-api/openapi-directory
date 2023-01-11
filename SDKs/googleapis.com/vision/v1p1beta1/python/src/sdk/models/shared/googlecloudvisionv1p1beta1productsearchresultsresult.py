import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1product as shared_googlecloudvisionv1p1beta1product


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1ProductSearchResultsResult:
    r"""GoogleCloudVisionV1p1beta1ProductSearchResultsResult
    Information about a product.
    """
    
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    product: Optional[shared_googlecloudvisionv1p1beta1product.GoogleCloudVisionV1p1beta1Product] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
