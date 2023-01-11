package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFleetsResponse
 * Response message for the `GkeHub.ListFleetsResponse` method.
**/
public class ListFleetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleets")
    public Fleet[] fleets;
    public ListFleetsResponse withFleets(Fleet[] fleets) {
        this.fleets = fleets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFleetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}