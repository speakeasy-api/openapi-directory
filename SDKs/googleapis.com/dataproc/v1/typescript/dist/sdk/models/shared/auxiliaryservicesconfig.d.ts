import { SpeakeasyBase } from "../../../internal/utils";
import { MetastoreConfig } from "./metastoreconfig";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";
/**
 * Auxiliary services configuration for a Cluster.
 */
export declare class AuxiliaryServicesConfig extends SpeakeasyBase {
    /**
     * Specifies a Metastore configuration.
     */
    metastoreConfig?: MetastoreConfig;
    /**
     * Spark History Server configuration for the workload.
     */
    sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
