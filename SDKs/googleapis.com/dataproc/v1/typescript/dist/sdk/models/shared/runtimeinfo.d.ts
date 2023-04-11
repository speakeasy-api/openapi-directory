import { SpeakeasyBase } from "../../../internal/utils";
import { UsageMetrics } from "./usagemetrics";
import { UsageSnapshot } from "./usagesnapshot";
/**
 * Runtime information about workload execution.
 */
export declare class RuntimeInfo extends SpeakeasyBase {
    /**
     * Usage metrics represent approximate total resources consumed by a workload.
     */
    approximateUsage?: UsageMetrics;
    /**
     * The usage snaphot represents the resources consumed by a workload at a specified time.
     */
    currentUsage?: UsageSnapshot;
    /**
     * Output only. A URI pointing to the location of the diagnostics tarball.
     */
    diagnosticOutputUri?: string;
    /**
     * Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs.
     */
    endpoints?: Record<string, string>;
    /**
     * Output only. A URI pointing to the location of the stdout and stderr of the workload.
     */
    outputUri?: string;
}
/**
 * Runtime information about workload execution.
 */
export declare class RuntimeInfoInput extends SpeakeasyBase {
    /**
     * Usage metrics represent approximate total resources consumed by a workload.
     */
    approximateUsage?: UsageMetrics;
    /**
     * The usage snaphot represents the resources consumed by a workload at a specified time.
     */
    currentUsage?: UsageSnapshot;
}
