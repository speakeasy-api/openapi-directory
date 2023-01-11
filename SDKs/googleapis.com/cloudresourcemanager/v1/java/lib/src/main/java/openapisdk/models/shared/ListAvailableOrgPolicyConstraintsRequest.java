package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAvailableOrgPolicyConstraintsRequest
 * The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization.
**/
public class ListAvailableOrgPolicyConstraintsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public ListAvailableOrgPolicyConstraintsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public ListAvailableOrgPolicyConstraintsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}