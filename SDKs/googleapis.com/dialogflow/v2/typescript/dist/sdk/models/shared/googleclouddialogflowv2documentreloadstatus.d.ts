import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The status of a reload attempt.
 */
export declare class GoogleCloudDialogflowV2DocumentReloadStatus extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: GoogleRpcStatus;
    /**
     * The time of a reload attempt. This reload may have been triggered automatically or manually and may not have succeeded.
     */
    time?: string;
}
