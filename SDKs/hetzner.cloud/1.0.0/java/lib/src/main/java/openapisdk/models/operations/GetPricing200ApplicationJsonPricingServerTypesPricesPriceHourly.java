package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}