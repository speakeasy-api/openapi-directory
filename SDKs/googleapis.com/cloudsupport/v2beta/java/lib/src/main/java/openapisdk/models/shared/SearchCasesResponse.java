package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchCasesResponse
 * The response message for the SearchCases endpoint.
**/
public class SearchCasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cases")
    public Case[] cases;
    public SearchCasesResponse withCases(Case[] cases) {
        this.cases = cases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchCasesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}