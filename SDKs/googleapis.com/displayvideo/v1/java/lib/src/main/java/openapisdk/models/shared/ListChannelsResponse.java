package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public Channel[] channels;
    public ListChannelsResponse withChannels(Channel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListChannelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}