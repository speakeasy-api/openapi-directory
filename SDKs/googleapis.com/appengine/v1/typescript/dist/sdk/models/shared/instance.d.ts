import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Availability of the instance.
 */
export declare enum InstanceAvailabilityEnum {
    Unspecified = "UNSPECIFIED",
    Resident = "RESIDENT",
    Dynamic = "DYNAMIC"
}
/**
 * Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment.
 */
export declare enum InstanceVmLivenessEnum {
    LivenessStateUnspecified = "LIVENESS_STATE_UNSPECIFIED",
    Unknown = "UNKNOWN",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Draining = "DRAINING",
    Timeout = "TIMEOUT"
}
/**
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Output only. App Engine release this instance is running on.
     */
    appEngineRelease?: string;
    /**
     * Output only. Availability of the instance.
     */
    availability?: InstanceAvailabilityEnum;
    /**
     * Output only. Average latency (ms) over the last minute.
     */
    averageLatency?: number;
    /**
     * Output only. Number of errors since this instance was started.
     */
    errors?: number;
    /**
     * Output only. Relative name of the instance within the version. Example: instance-1.
     */
    id?: string;
    /**
     * Output only. Total memory in use (bytes).
     */
    memoryUsage?: string;
    /**
     * Output only. Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     */
    name?: string;
    /**
     * Output only. Average queries per second (QPS) over the last minute.
     */
    qps?: number;
    /**
     * Output only. Number of requests since this instance was started.
     */
    requests?: number;
    /**
     * Output only. Time that this instance was started.@OutputOnly
     */
    startTime?: string;
    /**
     * Output only. Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.
     */
    vmDebugEnabled?: boolean;
    /**
     * Output only. Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.
     */
    vmId?: string;
    /**
     * Output only. The IP address of this instance. Only applicable for instances in App Engine flexible environment.
     */
    vmIp?: string;
    /**
     * Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment.
     */
    vmLiveness?: InstanceVmLivenessEnum;
    /**
     * Output only. Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.
     */
    vmName?: string;
    /**
     * Output only. Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.
     */
    vmStatus?: string;
    /**
     * Output only. Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.
     */
    vmZoneName?: string;
}
