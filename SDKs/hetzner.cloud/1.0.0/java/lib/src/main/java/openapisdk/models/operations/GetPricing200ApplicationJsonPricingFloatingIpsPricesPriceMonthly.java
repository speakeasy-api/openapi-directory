package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly
 * Monthly costs for a Floating IP type in this Location
**/
public class GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}