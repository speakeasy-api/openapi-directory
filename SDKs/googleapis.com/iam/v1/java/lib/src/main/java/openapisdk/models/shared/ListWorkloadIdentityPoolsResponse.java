package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkloadIdentityPoolsResponse
 * Response message for ListWorkloadIdentityPools.
**/
public class ListWorkloadIdentityPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkloadIdentityPoolsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadIdentityPools")
    public WorkloadIdentityPool[] workloadIdentityPools;
    public ListWorkloadIdentityPoolsResponse withWorkloadIdentityPools(WorkloadIdentityPool[] workloadIdentityPools) {
        this.workloadIdentityPools = workloadIdentityPools;
        return this;
    }
}