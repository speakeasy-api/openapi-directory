package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJson {
    @JsonProperty("pricing")
    public GetPricing200ApplicationJsonPricing pricing;
    public GetPricing200ApplicationJson withPricing(GetPricing200ApplicationJsonPricing pricing) {
        this.pricing = pricing;
        return this;
    }
}