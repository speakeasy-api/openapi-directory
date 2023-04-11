import { SpeakeasyBase } from "../../../internal/utils";
import { ApproximateProgress } from "./approximateprogress";
import { ApproximateSplitRequest } from "./approximatesplitrequest";
import { HotKeyDetection } from "./hotkeydetection";
import { MetricShortId } from "./metricshortid";
import { Position } from "./position";
import { Status } from "./status";
/**
 * The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
 */
export declare class WorkItemServiceState extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    completeWorkStatus?: Status;
    /**
     * Other data returned by the service, specific to the particular worker harness.
     */
    harnessData?: Record<string, any>;
    /**
     * Proto describing a hot key detected on a given WorkItem.
     */
    hotKeyDetection?: HotKeyDetection;
    /**
     * Time at which the current lease will expire.
     */
    leaseExpireTime?: string;
    /**
     * The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics.
     */
    metricShortId?: MetricShortId[];
    /**
     * The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts.
     */
    nextReportIndex?: string;
    /**
     * New recommended reporting interval.
     */
    reportStatusInterval?: string;
    /**
     * A suggestion by the service to the worker to dynamically split the WorkItem.
     */
    splitRequest?: ApproximateSplitRequest;
    /**
     * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
     */
    suggestedStopPoint?: ApproximateProgress;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    suggestedStopPosition?: Position;
}
