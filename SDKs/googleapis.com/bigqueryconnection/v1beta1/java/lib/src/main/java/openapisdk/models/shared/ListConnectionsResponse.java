package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectionsResponse
 * The response for ConnectionService.ListConnections.
**/
public class ListConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connections")
    public Connection[] connections;
    public ListConnectionsResponse withConnections(Connection[] connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListConnectionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}