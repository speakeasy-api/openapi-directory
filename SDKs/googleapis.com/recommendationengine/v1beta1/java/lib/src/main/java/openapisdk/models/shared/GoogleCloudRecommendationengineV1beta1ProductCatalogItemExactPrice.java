package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice
 * Exact product price.
**/
public class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayPrice")
    public Float displayPrice;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice withDisplayPrice(Float displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalPrice")
    public Float originalPrice;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice withOriginalPrice(Float originalPrice) {
        this.originalPrice = originalPrice;
        return this;
    }
}