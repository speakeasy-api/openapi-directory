package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCustomChannelsResponse
 * Response definition for the custom channel list rpc.
**/
public class ListCustomChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customChannels")
    public CustomChannel[] customChannels;
    public ListCustomChannelsResponse withCustomChannels(CustomChannel[] customChannels) {
        this.customChannels = customChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomChannelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}