import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice:
    r"""GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice
    Exact product price.
    """
    
    display_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayPrice') }})
    original_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    
