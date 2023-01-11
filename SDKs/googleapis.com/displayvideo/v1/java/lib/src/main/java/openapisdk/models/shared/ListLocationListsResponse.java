package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLocationListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationLists")
    public LocationList[] locationLists;
    public ListLocationListsResponse withLocationLists(LocationList[] locationLists) {
        this.locationLists = locationLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLocationListsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}