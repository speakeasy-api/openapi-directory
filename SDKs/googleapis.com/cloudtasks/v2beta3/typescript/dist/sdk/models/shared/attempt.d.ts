import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * The status of a task attempt.
 */
export declare class Attempt extends SpeakeasyBase {
    /**
     * Output only. The time that this attempt was dispatched. `dispatch_time` will be truncated to the nearest microsecond.
     */
    dispatchTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    responseStatus?: Status;
    /**
     * Output only. The time that this attempt response was received. `response_time` will be truncated to the nearest microsecond.
     */
    responseTime?: string;
    /**
     * Output only. The time that this attempt was scheduled. `schedule_time` will be truncated to the nearest microsecond.
     */
    scheduleTime?: string;
}
