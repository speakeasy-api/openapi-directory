package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}