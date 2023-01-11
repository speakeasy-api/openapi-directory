package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ProductCatalogItem
 * ProductCatalogItem captures item metadata specific to retail products.
**/
public class GoogleCloudRecommendationengineV1beta1ProductCatalogItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableQuantity")
    public String availableQuantity;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withAvailableQuantity(String availableQuantity) {
        this.availableQuantity = availableQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalProductUri")
    public String canonicalProductUri;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withCanonicalProductUri(String canonicalProductUri) {
        this.canonicalProductUri = canonicalProductUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costs")
    public java.util.Map<String, Float> costs;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withCosts(java.util.Map<String, Float> costs) {
        this.costs = costs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exactPrice")
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice exactPrice;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withExactPrice(GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice exactPrice) {
        this.exactPrice = exactPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public GoogleCloudRecommendationengineV1beta1Image[] images;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withImages(GoogleCloudRecommendationengineV1beta1Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceRange")
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange priceRange;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withPriceRange(GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange priceRange) {
        this.priceRange = priceRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stockState")
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum stockState;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem withStockState(GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum stockState) {
        this.stockState = stockState;
        return this;
    }
}