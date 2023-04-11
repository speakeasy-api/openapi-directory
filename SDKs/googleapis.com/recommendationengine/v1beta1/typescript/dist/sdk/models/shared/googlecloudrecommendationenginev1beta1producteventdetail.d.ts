import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1ProductDetail } from "./googlecloudrecommendationenginev1beta1productdetail";
import { GoogleCloudRecommendationengineV1beta1PurchaseTransaction } from "./googlecloudrecommendationenginev1beta1purchasetransaction";
/**
 * ProductEventDetail captures user event information specific to retail products.
 */
export declare class GoogleCloudRecommendationengineV1beta1ProductEventDetail extends SpeakeasyBase {
    /**
     * Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events.
     */
    cartId?: string;
    /**
     * Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field.
     */
    listId?: string;
    /**
     * Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"].
     */
    pageCategories?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    /**
     * The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view`
     */
    productDetails?: GoogleCloudRecommendationengineV1beta1ProductDetail[];
    /**
     * A transaction represents the entire purchase transaction.
     */
    purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
    /**
     * At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB.
     */
    searchQuery?: string;
}
