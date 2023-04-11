import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A selector that chooses target cluster for jobs based on metadata.
 */
export declare class ClusterSelector extends SpeakeasyBase {
    /**
     * Required. The cluster labels. Cluster must have all labels to match.
     */
    clusterLabels?: Record<string, string>;
    /**
     * Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.
     */
    zone?: string;
}
