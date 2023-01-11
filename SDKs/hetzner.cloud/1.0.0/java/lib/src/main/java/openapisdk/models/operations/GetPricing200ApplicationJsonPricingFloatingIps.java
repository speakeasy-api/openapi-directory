package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingFloatingIps {
    @JsonProperty("prices")
    public GetPricing200ApplicationJsonPricingFloatingIpsPrices[] prices;
    public GetPricing200ApplicationJsonPricingFloatingIps withPrices(GetPricing200ApplicationJsonPricingFloatingIpsPrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("type")
    public GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum type;
    public GetPricing200ApplicationJsonPricingFloatingIps withType(GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum type) {
        this.type = type;
        return this;
    }
}