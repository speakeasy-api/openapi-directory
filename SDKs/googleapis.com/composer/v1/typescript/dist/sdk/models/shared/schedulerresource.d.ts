import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for resources used by Airflow schedulers.
 */
export declare class SchedulerResource extends SpeakeasyBase {
    /**
     * Optional. The number of schedulers.
     */
    count?: number;
    /**
     * Optional. CPU request and limit for a single Airflow scheduler replica.
     */
    cpu?: number;
    /**
     * Optional. Memory (GB) request and limit for a single Airflow scheduler replica.
     */
    memoryGb?: number;
    /**
     * Optional. Storage (GB) request and limit for a single Airflow scheduler replica.
     */
    storageGb?: number;
}
