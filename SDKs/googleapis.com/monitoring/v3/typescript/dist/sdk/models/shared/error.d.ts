import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Detailed information about an error category.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The number of points that couldn't be written because of status.
     */
    pointCount?: number;
    /**
     * The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
}
