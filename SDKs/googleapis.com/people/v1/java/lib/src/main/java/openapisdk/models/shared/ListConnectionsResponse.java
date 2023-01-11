package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectionsResponse
 * The response to a request for the authenticated user's connections.
**/
public class ListConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connections")
    public Person[] connections;
    public ListConnectionsResponse withConnections(Person[] connections) {
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSyncToken")
    public String nextSyncToken;
    public ListConnectionsResponse withNextSyncToken(String nextSyncToken) {
        this.nextSyncToken = nextSyncToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public ListConnectionsResponse withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPeople")
    public Integer totalPeople;
    public ListConnectionsResponse withTotalPeople(Integer totalPeople) {
        this.totalPeople = totalPeople;
        return this;
    }
}