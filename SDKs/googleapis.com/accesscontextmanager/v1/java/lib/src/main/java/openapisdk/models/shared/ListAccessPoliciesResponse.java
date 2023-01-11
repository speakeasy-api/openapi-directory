package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAccessPoliciesResponse
 * A response to `ListAccessPoliciesRequest`.
**/
public class ListAccessPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicies")
    public AccessPolicy[] accessPolicies;
    public ListAccessPoliciesResponse withAccessPolicies(AccessPolicy[] accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAccessPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}