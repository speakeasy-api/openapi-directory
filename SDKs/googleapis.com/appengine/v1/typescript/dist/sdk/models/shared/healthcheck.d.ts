import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
 */
export declare class HealthCheck extends SpeakeasyBase {
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Whether to explicitly disable health checks for this instance.
     */
    disableHealthCheck?: boolean;
    /**
     * Number of consecutive successful health checks required before receiving traffic.
     */
    healthyThreshold?: number;
    /**
     * Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"
     */
    host?: string;
    /**
     * Number of consecutive failed health checks required before an instance is restarted.
     */
    restartThreshold?: number;
    /**
     * Time before the health check is considered failed.
     */
    timeout?: string;
    /**
     * Number of consecutive failed health checks required before removing traffic.
     */
    unhealthyThreshold?: number;
}
