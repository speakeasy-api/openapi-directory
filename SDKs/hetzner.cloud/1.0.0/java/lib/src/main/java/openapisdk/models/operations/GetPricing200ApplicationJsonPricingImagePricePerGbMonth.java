package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingImagePricePerGbMonth {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingImagePricePerGbMonth withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingImagePricePerGbMonth withNet(String net) {
        this.net = net;
        return this;
    }
}