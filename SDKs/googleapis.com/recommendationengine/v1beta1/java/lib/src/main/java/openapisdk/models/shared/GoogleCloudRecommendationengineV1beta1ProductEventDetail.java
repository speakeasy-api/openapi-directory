package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ProductEventDetail
 * ProductEventDetail captures user event information specific to retail products.
**/
public class GoogleCloudRecommendationengineV1beta1ProductEventDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cartId")
    public String cartId;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withCartId(String cartId) {
        this.cartId = cartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listId")
    public String listId;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withListId(String listId) {
        this.listId = listId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageCategories")
    public GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[] pageCategories;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withPageCategories(GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[] pageCategories) {
        this.pageCategories = pageCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productDetails")
    public GoogleCloudRecommendationengineV1beta1ProductDetail[] productDetails;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withProductDetails(GoogleCloudRecommendationengineV1beta1ProductDetail[] productDetails) {
        this.productDetails = productDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseTransaction")
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction purchaseTransaction;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withPurchaseTransaction(GoogleCloudRecommendationengineV1beta1PurchaseTransaction purchaseTransaction) {
        this.purchaseTransaction = purchaseTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchQuery")
    public String searchQuery;
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}