package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersServerTypePricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class GetServers200ApplicationJsonServersServerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetServers200ApplicationJsonServersServerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServers200ApplicationJsonServersServerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}