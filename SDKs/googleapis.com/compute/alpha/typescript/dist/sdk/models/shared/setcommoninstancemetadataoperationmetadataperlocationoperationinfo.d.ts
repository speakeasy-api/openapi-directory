import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoStateEnum {
    Abandoned = "ABANDONED",
    Done = "DONE",
    Failed = "FAILED",
    Propagated = "PROPAGATED",
    Propagating = "PROPAGATING",
    Unspecified = "UNSPECIFIED"
}
export declare class SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    state?: SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoStateEnum;
}
