package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingTrafficPricePerTb {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingTrafficPricePerTb withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingTrafficPricePerTb withNet(String net) {
        this.net = net;
        return this;
    }
}