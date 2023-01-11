package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUrlChannelsResponse
 * Response definition for the url channels list rpc.
**/
public class ListUrlChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUrlChannelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlChannels")
    public UrlChannel[] urlChannels;
    public ListUrlChannelsResponse withUrlChannels(UrlChannel[] urlChannels) {
        this.urlChannels = urlChannels;
        return this;
    }
}