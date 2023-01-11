package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerServerTypePricesPriceMonthly
 * Monthly costs for a Server type in this Location
**/
public class PostServersCreateServerResponseServerServerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public PostServersCreateServerResponseServerServerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PostServersCreateServerResponseServerServerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}