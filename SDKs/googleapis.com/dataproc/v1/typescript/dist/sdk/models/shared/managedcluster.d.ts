import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfig } from "./clusterconfig";
import { ClusterConfigInput } from "./clusterconfig";
/**
 * Cluster that is managed by the workflow.
**/
export declare class ManagedCluster extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfig;
    labels?: Record<string, string>;
}
/**
 * Cluster that is managed by the workflow.
**/
export declare class ManagedClusterInput extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfigInput;
    labels?: Record<string, string>;
}
