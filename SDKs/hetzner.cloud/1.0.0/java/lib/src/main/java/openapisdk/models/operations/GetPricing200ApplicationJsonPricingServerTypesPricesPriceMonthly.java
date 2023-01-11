package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}