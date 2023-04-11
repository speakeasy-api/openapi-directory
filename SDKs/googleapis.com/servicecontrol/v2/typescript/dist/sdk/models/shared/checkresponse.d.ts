import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response message for the Check method.
 */
export declare class CheckResponse extends SpeakeasyBase {
    /**
     * Returns a set of request contexts generated from the `CheckRequest`.
     */
    headers?: Record<string, string>;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
}
