import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
 */
export declare class GooglePrivacyDlpV2Error extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    details?: GoogleRpcStatus;
    /**
     * The times the error occurred.
     */
    timestamps?: string[];
}
