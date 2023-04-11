import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
/**
 * The status of discovery for the resource.
 */
export declare enum DiscoveryOccurrenceAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    FinishedSuccess = "FINISHED_SUCCESS",
    Complete = "COMPLETE",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}
/**
 * Whether the resource is continuously analyzed.
 */
export declare enum DiscoveryOccurrenceContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Provides information about the analysis status of a discovered resource.
 */
export declare class DiscoveryOccurrence extends SpeakeasyBase {
    /**
     * Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
     */
    analysisCompleted?: AnalysisCompleted;
    /**
     * Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.
     */
    analysisError?: Status[];
    /**
     * The status of discovery for the resource.
     */
    analysisStatus?: DiscoveryOccurrenceAnalysisStatusEnum;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    analysisStatusError?: Status;
    /**
     * Output only. The time occurrences related to this discovery occurrence were archived.
     */
    archiveTime?: string;
    /**
     * Whether the resource is continuously analyzed.
     */
    continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysisEnum;
    /**
     * The CPE of the resource being scanned.
     */
    cpe?: string;
    /**
     * The last time this resource was scanned.
     */
    lastScanTime?: string;
}
