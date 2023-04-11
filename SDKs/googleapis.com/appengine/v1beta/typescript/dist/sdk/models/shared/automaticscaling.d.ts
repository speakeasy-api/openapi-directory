import { SpeakeasyBase } from "../../../internal/utils";
import { CpuUtilization } from "./cpuutilization";
import { CustomMetric } from "./custommetric";
import { DiskUtilization } from "./diskutilization";
import { NetworkUtilization } from "./networkutilization";
import { RequestUtilization } from "./requestutilization";
import { StandardSchedulerSettings } from "./standardschedulersettings";
/**
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
 */
export declare class AutomaticScaling extends SpeakeasyBase {
    /**
     * The time period that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. Only applicable in the App Engine flexible environment.
     */
    coolDownPeriod?: string;
    /**
     * Target scaling by CPU usage.
     */
    cpuUtilization?: CpuUtilization;
    /**
     * Target scaling by user-provided metrics. Only applicable in the App Engine flexible environment.
     */
    customMetrics?: CustomMetric[];
    /**
     * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
     */
    diskUtilization?: DiskUtilization;
    /**
     * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.
     */
    maxConcurrentRequests?: number;
    /**
     * Maximum number of idle instances that should be maintained for this version.
     */
    maxIdleInstances?: number;
    /**
     * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
     */
    maxPendingLatency?: string;
    /**
     * Maximum number of instances that should be started to handle requests for this version.
     */
    maxTotalInstances?: number;
    /**
     * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
     */
    minIdleInstances?: number;
    /**
     * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
     */
    minPendingLatency?: string;
    /**
     * Minimum number of running instances that should be maintained for this version.
     */
    minTotalInstances?: number;
    /**
     * Target scaling by network usage. Only applicable in the App Engine flexible environment.
     */
    networkUtilization?: NetworkUtilization;
    /**
     * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
     */
    requestUtilization?: RequestUtilization;
    /**
     * Scheduler settings for standard environment.
     */
    standardSchedulerSettings?: StandardSchedulerSettings;
}
