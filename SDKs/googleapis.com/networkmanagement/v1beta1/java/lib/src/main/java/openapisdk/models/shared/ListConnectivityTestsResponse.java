package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectivityTestsResponse
 * Response for the `ListConnectivityTests` method.
**/
public class ListConnectivityTestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListConnectivityTestsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ConnectivityTest[] resources;
    public ListConnectivityTestsResponse withResources(ConnectivityTest[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListConnectivityTestsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}