package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange
 * Product price range when there are a range of prices for different variations of the same product.
**/
public class GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Float max;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange withMax(Float max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Float min;
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange withMin(Float min) {
        this.min = min;
        return this;
    }
}