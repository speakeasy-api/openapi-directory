import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy as shared_googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy
from ..shared import googlecloudrecommendationenginev1beta1productdetail as shared_googlecloudrecommendationenginev1beta1productdetail
from ..shared import googlecloudrecommendationenginev1beta1purchasetransaction as shared_googlecloudrecommendationenginev1beta1purchasetransaction


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ProductEventDetail:
    r"""GoogleCloudRecommendationengineV1beta1ProductEventDetail
    ProductEventDetail captures user event information specific to retail products.
    """
    
    cart_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cartId') }})
    list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listId') }})
    page_categories: Optional[list[shared_googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategories') }})
    product_details: Optional[list[shared_googlecloudrecommendationenginev1beta1productdetail.GoogleCloudRecommendationengineV1beta1ProductDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDetails') }})
    purchase_transaction: Optional[shared_googlecloudrecommendationenginev1beta1purchasetransaction.GoogleCloudRecommendationengineV1beta1PurchaseTransaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseTransaction') }})
    search_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQuery') }})
    
