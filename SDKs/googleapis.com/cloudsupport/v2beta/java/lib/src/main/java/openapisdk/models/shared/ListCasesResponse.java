package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCasesResponse
 * The response message for the ListCases endpoint.
**/
public class ListCasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cases")
    public Case[] cases;
    public ListCasesResponse withCases(Case[] cases) {
        this.cases = cases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCasesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}