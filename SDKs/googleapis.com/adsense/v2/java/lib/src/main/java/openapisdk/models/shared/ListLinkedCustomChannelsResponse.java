package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLinkedCustomChannelsResponse
 * Response definition for the custom channels linked to an adunit list rpc.
**/
public class ListLinkedCustomChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customChannels")
    public CustomChannel[] customChannels;
    public ListLinkedCustomChannelsResponse withCustomChannels(CustomChannel[] customChannels) {
        this.customChannels = customChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLinkedCustomChannelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}