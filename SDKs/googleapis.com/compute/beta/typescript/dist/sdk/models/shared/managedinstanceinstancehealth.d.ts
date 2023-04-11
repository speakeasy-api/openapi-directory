import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The current detailed instance health state.
 */
export declare enum ManagedInstanceInstanceHealthDetailedHealthStateEnum {
    Draining = "DRAINING",
    Healthy = "HEALTHY",
    Timeout = "TIMEOUT",
    Unhealthy = "UNHEALTHY",
    Unknown = "UNKNOWN"
}
export declare class ManagedInstanceInstanceHealth extends SpeakeasyBase {
    /**
     * [Output Only] The current detailed instance health state.
     */
    detailedHealthState?: ManagedInstanceInstanceHealthDetailedHealthStateEnum;
    /**
     * [Output Only] The URL for the health check that verifies whether the instance is healthy.
     */
    healthCheck?: string;
}
