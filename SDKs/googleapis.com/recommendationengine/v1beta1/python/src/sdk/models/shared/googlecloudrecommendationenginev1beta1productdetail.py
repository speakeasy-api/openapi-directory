import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1featuremap as shared_googlecloudrecommendationenginev1beta1featuremap

class GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum(str, Enum):
    STOCK_STATE_UNSPECIFIED = "STOCK_STATE_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ProductDetail:
    r"""GoogleCloudRecommendationengineV1beta1ProductDetail
    Detailed product information associated with a user event.
    """
    
    available_quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQuantity') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    display_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayPrice') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item_attributes: Optional[shared_googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemAttributes') }})
    original_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    stock_state: Optional[GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stockState') }})
    
