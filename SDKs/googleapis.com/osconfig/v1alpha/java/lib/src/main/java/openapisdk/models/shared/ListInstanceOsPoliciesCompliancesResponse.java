package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInstanceOsPoliciesCompliancesResponse
 * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
**/
public class ListInstanceOsPoliciesCompliancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceOsPoliciesCompliances")
    public InstanceOsPoliciesCompliance[] instanceOsPoliciesCompliances;
    public ListInstanceOsPoliciesCompliancesResponse withInstanceOsPoliciesCompliances(InstanceOsPoliciesCompliance[] instanceOsPoliciesCompliances) {
        this.instanceOsPoliciesCompliances = instanceOsPoliciesCompliances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInstanceOsPoliciesCompliancesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}