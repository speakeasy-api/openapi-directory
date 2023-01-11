package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}