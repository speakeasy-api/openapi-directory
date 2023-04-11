import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSelector } from "./clusterselector";
import { ManagedCluster, ManagedClusterInput } from "./managedcluster";
/**
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
 */
export declare class WorkflowTemplatePlacementInput extends SpeakeasyBase {
    /**
     * A selector that chooses target cluster for jobs based on metadata.
     */
    clusterSelector?: ClusterSelector;
    /**
     * Cluster that is managed by the workflow.
     */
    managedCluster?: ManagedClusterInput;
}
/**
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
 */
export declare class WorkflowTemplatePlacement extends SpeakeasyBase {
    /**
     * A selector that chooses target cluster for jobs based on metadata.
     */
    clusterSelector?: ClusterSelector;
    /**
     * Cluster that is managed by the workflow.
     */
    managedCluster?: ManagedCluster;
}
