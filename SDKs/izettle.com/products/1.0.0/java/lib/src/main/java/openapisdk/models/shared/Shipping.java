package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Shipping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingPricingModel")
    public ShippingShippingPricingModelEnum shippingPricingModel;
    public Shipping withShippingPricingModel(ShippingShippingPricingModelEnum shippingPricingModel) {
        this.shippingPricingModel = shippingPricingModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Weight weight;
    public Shipping withWeight(Weight weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightInGrams")
    public Long weightInGrams;
    public Shipping withWeightInGrams(Long weightInGrams) {
        this.weightInGrams = weightInGrams;
        return this;
    }
}