import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfig, ClusterConfigInput } from "./clusterconfig";
/**
 * Cluster that is managed by the workflow.
 */
export declare class ManagedClusterInput extends SpeakeasyBase {
    /**
     * Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
     */
    clusterName?: string;
    /**
     * The cluster config.
     */
    config?: ClusterConfigInput;
    /**
     * Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.
     */
    labels?: Record<string, string>;
}
/**
 * Cluster that is managed by the workflow.
 */
export declare class ManagedCluster extends SpeakeasyBase {
    /**
     * Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
     */
    clusterName?: string;
    /**
     * The cluster config.
     */
    config?: ClusterConfig;
    /**
     * Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.
     */
    labels?: Record<string, string>;
}
