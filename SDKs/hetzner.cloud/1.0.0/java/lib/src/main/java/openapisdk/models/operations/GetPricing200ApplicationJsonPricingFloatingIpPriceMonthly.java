package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}