import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Evaluation metrics for clustering models.
 */
export declare class ClusteringMetrics extends SpeakeasyBase {
    /**
     * Information for all clusters.
     */
    clusters?: Cluster[];
    /**
     * Davies-Bouldin index.
     */
    daviesBouldinIndex?: number;
    /**
     * Mean of squared distances between each sample to its cluster centroid.
     */
    meanSquaredDistance?: number;
}
