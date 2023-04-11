import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * The type of change that occurred.
 */
export declare enum TargetChangeTargetChangeTypeEnum {
    NoChange = "NO_CHANGE",
    Add = "ADD",
    Remove = "REMOVE",
    Current = "CURRENT",
    Reset = "RESET"
}
/**
 * Targets being watched have changed.
 */
export declare class TargetChange extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    cause?: Status;
    /**
     * The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing.
     */
    readTime?: string;
    /**
     * A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change.
     */
    resumeToken?: string;
    /**
     * The type of change that occurred.
     */
    targetChangeType?: TargetChangeTargetChangeTypeEnum;
    /**
     * The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined.
     */
    targetIds?: number[];
}
