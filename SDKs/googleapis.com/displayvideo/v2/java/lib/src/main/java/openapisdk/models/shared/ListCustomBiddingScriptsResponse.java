package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomBiddingScriptsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingScripts")
    public CustomBiddingScript[] customBiddingScripts;
    public ListCustomBiddingScriptsResponse withCustomBiddingScripts(CustomBiddingScript[] customBiddingScripts) {
        this.customBiddingScripts = customBiddingScripts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomBiddingScriptsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}