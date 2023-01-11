package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ProductDetail
 * Detailed product information associated with a user event.
**/
public class GoogleCloudRecommendationengineV1beta1ProductDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableQuantity")
    public Integer availableQuantity;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withAvailableQuantity(Integer availableQuantity) {
        this.availableQuantity = availableQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayPrice")
    public Float displayPrice;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withDisplayPrice(Float displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemAttributes")
    public GoogleCloudRecommendationengineV1beta1FeatureMap itemAttributes;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withItemAttributes(GoogleCloudRecommendationengineV1beta1FeatureMap itemAttributes) {
        this.itemAttributes = itemAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalPrice")
    public Float originalPrice;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withOriginalPrice(Float originalPrice) {
        this.originalPrice = originalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stockState")
    public GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum stockState;
    public GoogleCloudRecommendationengineV1beta1ProductDetail withStockState(GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum stockState) {
        this.stockState = stockState;
        return this;
    }
}