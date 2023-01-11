package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOrgPoliciesRequest
 * The request sent to the ListOrgPolicies method.
**/
public class ListOrgPoliciesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public ListOrgPoliciesRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public ListOrgPoliciesRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}