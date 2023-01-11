package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnPremClusterInput
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
public class OnPremClusterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminCluster")
    public Boolean adminCluster;
    public OnPremClusterInput withAdminCluster(Boolean adminCluster) {
        this.adminCluster = adminCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterType")
    public OnPremClusterClusterTypeEnum clusterType;
    public OnPremClusterInput withClusterType(OnPremClusterClusterTypeEnum clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public OnPremClusterInput withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}