package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLists")
    public CustomList[] customLists;
    public ListCustomListsResponse withCustomLists(CustomList[] customLists) {
        this.customLists = customLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomListsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}