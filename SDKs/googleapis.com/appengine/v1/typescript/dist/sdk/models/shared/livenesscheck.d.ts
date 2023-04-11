import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
 */
export declare class LivenessCheck extends SpeakeasyBase {
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Number of consecutive failed checks required before considering the VM unhealthy.
     */
    failureThreshold?: number;
    /**
     * Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com"
     */
    host?: string;
    /**
     * The initial delay before starting to execute the checks.
     */
    initialDelay?: string;
    /**
     * The request path.
     */
    path?: string;
    /**
     * Number of consecutive successful checks required before considering the VM healthy.
     */
    successThreshold?: number;
    /**
     * Time before the check is considered failed.
     */
    timeout?: string;
}
