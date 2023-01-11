package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingServerTypes {
    @JsonProperty("id")
    public Double id;
    public GetPricing200ApplicationJsonPricingServerTypes withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetPricing200ApplicationJsonPricingServerTypes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetPricing200ApplicationJsonPricingServerTypesPrices[] prices;
    public GetPricing200ApplicationJsonPricingServerTypes withPrices(GetPricing200ApplicationJsonPricingServerTypesPrices[] prices) {
        this.prices = prices;
        return this;
    }
}