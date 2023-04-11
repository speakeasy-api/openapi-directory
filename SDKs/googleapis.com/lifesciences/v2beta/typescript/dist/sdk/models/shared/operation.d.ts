import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * This resource represents a long-running operation that is the result of a network API call.
 */
export declare class Operation extends SpeakeasyBase {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * An Metadata object. This will always be returned with the Operation.
     */
    metadata?: Record<string, any>;
    /**
     * The server-assigned name for the operation. This may be passed to the other operation methods to retrieve information about the operation's status.
     */
    name?: string;
    /**
     * An Empty object.
     */
    response?: Record<string, any>;
}
