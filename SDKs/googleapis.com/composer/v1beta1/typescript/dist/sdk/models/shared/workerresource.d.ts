import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for resources used by Airflow workers.
 */
export declare class WorkerResource extends SpeakeasyBase {
    /**
     * Optional. CPU request and limit for a single Airflow worker replica.
     */
    cpu?: number;
    /**
     * Optional. Maximum number of workers for autoscaling.
     */
    maxCount?: number;
    /**
     * Optional. Memory (GB) request and limit for a single Airflow worker replica.
     */
    memoryGb?: number;
    /**
     * Optional. Minimum number of workers for autoscaling.
     */
    minCount?: number;
    /**
     * Optional. Storage (GB) request and limit for a single Airflow worker replica.
     */
    storageGb?: number;
}
