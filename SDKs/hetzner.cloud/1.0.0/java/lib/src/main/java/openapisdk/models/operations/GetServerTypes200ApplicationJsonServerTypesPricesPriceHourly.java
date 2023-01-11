package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}