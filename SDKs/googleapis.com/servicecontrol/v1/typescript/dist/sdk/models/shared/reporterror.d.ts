import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Represents the processing error of one Operation in the request.
 */
export declare class ReportError extends SpeakeasyBase {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
}
