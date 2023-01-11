package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersServerTypePricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class GetServers200ApplicationJsonServersServerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetServers200ApplicationJsonServersServerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServers200ApplicationJsonServersServerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}