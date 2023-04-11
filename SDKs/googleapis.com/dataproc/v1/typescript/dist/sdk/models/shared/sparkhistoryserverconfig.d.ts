import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spark History Server configuration for the workload.
 */
export declare class SparkHistoryServerConfig extends SpeakeasyBase {
    /**
     * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]
     */
    dataprocCluster?: string;
}
