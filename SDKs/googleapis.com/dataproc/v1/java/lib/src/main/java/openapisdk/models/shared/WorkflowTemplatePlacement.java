package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTemplatePlacement
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
public class WorkflowTemplatePlacement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterSelector")
    public ClusterSelector clusterSelector;
    public WorkflowTemplatePlacement withClusterSelector(ClusterSelector clusterSelector) {
        this.clusterSelector = clusterSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedCluster")
    public ManagedCluster managedCluster;
    public WorkflowTemplatePlacement withManagedCluster(ManagedCluster managedCluster) {
        this.managedCluster = managedCluster;
        return this;
    }
}