package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PurchaseTransaction
 * A transaction represents the entire purchase transaction.
**/
public class GoogleCloudRecommendationengineV1beta1PurchaseTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costs")
    public java.util.Map<String, Float> costs;
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction withCosts(java.util.Map<String, Float> costs) {
        this.costs = costs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenue")
    public Float revenue;
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction withRevenue(Float revenue) {
        this.revenue = revenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public java.util.Map<String, Float> taxes;
    public GoogleCloudRecommendationengineV1beta1PurchaseTransaction withTaxes(java.util.Map<String, Float> taxes) {
        this.taxes = taxes;
        return this;
    }
}