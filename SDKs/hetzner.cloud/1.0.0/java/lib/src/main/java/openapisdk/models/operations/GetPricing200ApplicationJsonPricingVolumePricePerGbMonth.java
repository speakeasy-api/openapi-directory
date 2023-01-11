package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingVolumePricePerGbMonth {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingVolumePricePerGbMonth withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingVolumePricePerGbMonth withNet(String net) {
        this.net = net;
        return this;
    }
}