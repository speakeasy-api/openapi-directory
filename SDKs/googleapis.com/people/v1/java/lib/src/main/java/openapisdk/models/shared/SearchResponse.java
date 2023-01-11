package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponse
 * The response to a search request for the authenticated user, given a query.
**/
public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public SearchResult[] results;
    public SearchResponse withResults(SearchResult[] results) {
        this.results = results;
        return this;
    }
}