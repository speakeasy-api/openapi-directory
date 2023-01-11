package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountBidderLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidProtocol")
    public String bidProtocol;
    public AccountBidderLocation withBidProtocol(String bidProtocol) {
        this.bidProtocol = bidProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumQps")
    public Integer maximumQps;
    public AccountBidderLocation withMaximumQps(Integer maximumQps) {
        this.maximumQps = maximumQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public AccountBidderLocation withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AccountBidderLocation withUrl(String url) {
        this.url = url;
        return this;
    }
}