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
/**
 * [Output Only] The current instance health state. This field will not get promoted to beta/GA and might be removed from alpha APIs after 01/12/2019. Please use detailed_health_state field instead.
 */
export declare enum ManagedInstanceInstanceHealthHealthStateEnum {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY"
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
    /**
     * [Output Only] The current instance health state. This field will not get promoted to beta/GA and might be removed from alpha APIs after 01/12/2019. Please use detailed_health_state field instead.
     */
    healthState?: ManagedInstanceInstanceHealthHealthStateEnum;
}
