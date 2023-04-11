import { SpeakeasyBase } from "../../../internal/utils";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";
/**
 * Auxiliary services configuration for a workload.
 */
export declare class PeripheralsConfig extends SpeakeasyBase {
    /**
     * Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id]
     */
    metastoreService?: string;
    /**
     * Spark History Server configuration for the workload.
     */
    sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
