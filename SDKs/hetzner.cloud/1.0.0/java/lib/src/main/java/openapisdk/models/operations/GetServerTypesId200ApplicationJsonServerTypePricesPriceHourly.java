package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}