import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The `Status` type defines a logical error model that is suitable for
 *
 * @remarks
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export declare class GoogleRpcStatus extends SpeakeasyBase {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of
     *
     * @remarks
     * message types for APIs to use.
     */
    details?: Record<string, any>[];
    /**
     * A developer-facing error message, which should be in English. Any
     *
     * @remarks
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
}
