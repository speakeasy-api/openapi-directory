import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthCheck extends SpeakeasyBase {
    /**
     * How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.
     */
    checkIntervalSec?: number;
    /**
     * The description for this health check.
     */
    description?: string;
    /**
     * The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.
     */
    healthyThreshold?: number;
    /**
     * The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.
     */
    host?: string;
    /**
     * The name of this health check.
     */
    name?: string;
    /**
     * The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.
     */
    path?: string;
    /**
     * The TCP port for the health check requests.
     */
    port?: number;
    /**
     * How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.
     */
    timeoutSec?: number;
    /**
     * The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.
     */
    unhealthyThreshold?: number;
}
