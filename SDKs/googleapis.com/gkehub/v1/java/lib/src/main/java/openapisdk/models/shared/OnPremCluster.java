package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnPremCluster
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
public class OnPremCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminCluster")
    public Boolean adminCluster;
    public OnPremCluster withAdminCluster(Boolean adminCluster) {
        this.adminCluster = adminCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMissing")
    public Boolean clusterMissing;
    public OnPremCluster withClusterMissing(Boolean clusterMissing) {
        this.clusterMissing = clusterMissing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterType")
    public OnPremClusterClusterTypeEnum clusterType;
    public OnPremCluster withClusterType(OnPremClusterClusterTypeEnum clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public OnPremCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}