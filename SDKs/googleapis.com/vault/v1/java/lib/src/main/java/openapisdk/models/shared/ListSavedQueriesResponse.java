package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSavedQueriesResponse
 * Definition of the response for method ListSaveQuery.
**/
public class ListSavedQueriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSavedQueriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savedQueries")
    public SavedQuery[] savedQueries;
    public ListSavedQueriesResponse withSavedQueries(SavedQuery[] savedQueries) {
        this.savedQueries = savedQueries;
        return this;
    }
}