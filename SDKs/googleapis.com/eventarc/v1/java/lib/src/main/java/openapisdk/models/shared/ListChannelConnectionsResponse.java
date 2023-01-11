package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListChannelConnectionsResponse
 * The response message for the `ListChannelConnections` method.
**/
public class ListChannelConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelConnections")
    public ChannelConnection[] channelConnections;
    public ListChannelConnectionsResponse withChannelConnections(ChannelConnection[] channelConnections) {
        this.channelConnections = channelConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListChannelConnectionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListChannelConnectionsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}