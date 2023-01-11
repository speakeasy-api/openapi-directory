package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerServerTypePricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class GetServersId200ApplicationJsonServerServerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetServersId200ApplicationJsonServerServerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServersId200ApplicationJsonServerServerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}