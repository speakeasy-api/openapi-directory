package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Endpoint
 * Bidder endpoint that receives bid requests.
**/
public class Endpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidProtocol")
    public EndpointBidProtocolEnum bidProtocol;
    public Endpoint withBidProtocol(EndpointBidProtocolEnum bidProtocol) {
        this.bidProtocol = bidProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumQps")
    public String maximumQps;
    public Endpoint withMaximumQps(String maximumQps) {
        this.maximumQps = maximumQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Endpoint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tradingLocation")
    public EndpointTradingLocationEnum tradingLocation;
    public Endpoint withTradingLocation(EndpointTradingLocationEnum tradingLocation) {
        this.tradingLocation = tradingLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Endpoint withUrl(String url) {
        this.url = url;
        return this;
    }
}