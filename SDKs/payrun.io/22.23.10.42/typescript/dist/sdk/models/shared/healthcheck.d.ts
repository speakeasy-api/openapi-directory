import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthCheckHealthCheck extends SpeakeasyBase {
    /**
     * The health checks' info
     */
    info?: string;
    /**
     * The health checks' version
     */
    version?: string;
}
/**
 * The health check object.
 */
export declare class HealthCheck extends SpeakeasyBase {
    healthCheck?: HealthCheckHealthCheck;
}
