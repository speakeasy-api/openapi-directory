package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchAllIamPoliciesResponse
 * Search all IAM policies response.
**/
public class SearchAllIamPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchAllIamPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public IamPolicySearchResult[] results;
    public SearchAllIamPoliciesResponse withResults(IamPolicySearchResult[] results) {
        this.results = results;
        return this;
    }
}