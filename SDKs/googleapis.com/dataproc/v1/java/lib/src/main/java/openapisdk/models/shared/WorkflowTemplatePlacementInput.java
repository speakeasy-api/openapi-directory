package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTemplatePlacementInput
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
public class WorkflowTemplatePlacementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterSelector")
    public ClusterSelector clusterSelector;
    public WorkflowTemplatePlacementInput withClusterSelector(ClusterSelector clusterSelector) {
        this.clusterSelector = clusterSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedCluster")
    public ManagedClusterInput managedCluster;
    public WorkflowTemplatePlacementInput withManagedCluster(ManagedClusterInput managedCluster) {
        this.managedCluster = managedCluster;
        return this;
    }
}