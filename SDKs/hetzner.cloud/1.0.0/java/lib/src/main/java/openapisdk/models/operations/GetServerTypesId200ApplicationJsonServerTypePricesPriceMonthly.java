package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}