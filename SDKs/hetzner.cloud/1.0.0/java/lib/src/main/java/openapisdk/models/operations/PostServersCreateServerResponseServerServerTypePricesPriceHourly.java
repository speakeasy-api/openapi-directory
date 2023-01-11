package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerServerTypePricesPriceHourly
 * Hourly costs for a Server type in this Location
**/
public class PostServersCreateServerResponseServerServerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public PostServersCreateServerResponseServerServerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PostServersCreateServerResponseServerServerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}