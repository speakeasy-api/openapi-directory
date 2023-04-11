import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimestampedEvent } from "./timestampedevent";
import { WorkerStatus } from "./workerstatus";
/**
 * The parameters to the CheckIn method.
 */
export declare class CheckInRequest extends SpeakeasyBase {
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
     */
    deadlineExpired?: Record<string, any>;
    /**
     * A workflow specific event occurred.
     */
    event?: Record<string, any>;
    /**
     * A list of timestamped events.
     */
    events?: TimestampedEvent[];
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    result?: Status;
    /**
     * An SOS report for an unexpected VM failure.
     */
    sosReport?: string;
    /**
     * The status of the worker VM.
     */
    workerStatus?: WorkerStatus;
}
