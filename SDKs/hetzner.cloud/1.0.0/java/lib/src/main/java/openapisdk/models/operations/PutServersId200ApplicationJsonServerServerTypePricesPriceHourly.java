package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerServerTypePricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class PutServersId200ApplicationJsonServerServerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public PutServersId200ApplicationJsonServerServerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PutServersId200ApplicationJsonServerServerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}