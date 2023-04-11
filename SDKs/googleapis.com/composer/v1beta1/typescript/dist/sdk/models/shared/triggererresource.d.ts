import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for resources used by Airflow triggerers.
 */
export declare class TriggererResource extends SpeakeasyBase {
    /**
     * Optional. The number of triggerers.
     */
    count?: number;
    /**
     * Optional. CPU request and limit for a single Airflow triggerer replica.
     */
    cpu?: number;
    /**
     * Optional. Memory (GB) request and limit for a single Airflow triggerer replica.
     */
    memoryGb?: number;
}
