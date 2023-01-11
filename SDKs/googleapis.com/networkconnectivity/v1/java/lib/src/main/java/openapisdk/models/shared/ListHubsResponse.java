package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHubsResponse
 * Response for HubService.ListHubs method.
**/
public class ListHubsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hubs")
    public Hub[] hubs;
    public ListHubsResponse withHubs(Hub[] hubs) {
        this.hubs = hubs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListHubsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListHubsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}