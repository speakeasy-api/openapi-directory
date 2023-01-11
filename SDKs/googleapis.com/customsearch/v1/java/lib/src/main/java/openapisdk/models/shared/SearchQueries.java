package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchQueries
 * Query metadata for the previous, current, and next pages of results.
**/
public class SearchQueries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public SearchQueriesNextPage[] nextPage;
    public SearchQueries withNextPage(SearchQueriesNextPage[] nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousPage")
    public SearchQueriesPreviousPage[] previousPage;
    public SearchQueries withPreviousPage(SearchQueriesPreviousPage[] previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public SearchQueriesRequest[] request;
    public SearchQueries withRequest(SearchQueriesRequest[] request) {
        this.request = request;
        return this;
    }
}