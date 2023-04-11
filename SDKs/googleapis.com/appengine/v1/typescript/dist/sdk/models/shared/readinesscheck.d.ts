import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
 */
export declare class ReadinessCheck extends SpeakeasyBase {
    /**
     * A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
     */
    appStartTimeout?: string;
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Number of consecutive failed checks required before removing traffic.
     */
    failureThreshold?: number;
    /**
     * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
     */
    host?: string;
    /**
     * The request path.
     */
    path?: string;
    /**
     * Number of consecutive successful checks required before receiving traffic.
     */
    successThreshold?: number;
    /**
     * Time before the check is considered failed.
     */
    timeout?: string;
}
