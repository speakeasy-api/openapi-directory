import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1productcatalogitemexactprice as shared_googlecloudrecommendationenginev1beta1productcatalogitemexactprice
from ..shared import googlecloudrecommendationenginev1beta1image as shared_googlecloudrecommendationenginev1beta1image
from ..shared import googlecloudrecommendationenginev1beta1productcatalogitempricerange as shared_googlecloudrecommendationenginev1beta1productcatalogitempricerange

class GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum(str, Enum):
    STOCK_STATE_UNSPECIFIED = "STOCK_STATE_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItem:
    r"""GoogleCloudRecommendationengineV1beta1ProductCatalogItem
    ProductCatalogItem captures item metadata specific to retail products.
    """
    
    available_quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQuantity') }})
    canonical_product_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalProductUri') }})
    costs: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costs') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    exact_price: Optional[shared_googlecloudrecommendationenginev1beta1productcatalogitemexactprice.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactPrice') }})
    images: Optional[list[shared_googlecloudrecommendationenginev1beta1image.GoogleCloudRecommendationengineV1beta1Image]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    price_range: Optional[shared_googlecloudrecommendationenginev1beta1productcatalogitempricerange.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRange') }})
    stock_state: Optional[GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stockState') }})
    
