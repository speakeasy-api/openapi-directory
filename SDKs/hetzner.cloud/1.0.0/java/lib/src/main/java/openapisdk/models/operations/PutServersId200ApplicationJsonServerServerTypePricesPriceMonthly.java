package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}