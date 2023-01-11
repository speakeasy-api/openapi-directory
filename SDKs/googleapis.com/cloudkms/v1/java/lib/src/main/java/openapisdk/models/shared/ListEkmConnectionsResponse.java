package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEkmConnectionsResponse
 * Response message for EkmService.ListEkmConnections.
**/
public class ListEkmConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ekmConnections")
    public EkmConnection[] ekmConnections;
    public ListEkmConnectionsResponse withEkmConnections(EkmConnection[] ekmConnections) {
        this.ekmConnections = ekmConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEkmConnectionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListEkmConnectionsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}