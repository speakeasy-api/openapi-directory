import { SpeakeasyBase } from "../../../internal/utils";
import { MoveAnalysisResult } from "./moveanalysisresult";
import { Status } from "./status";
/**
 * A message to group the analysis information.
 */
export declare class MoveAnalysis extends SpeakeasyBase {
    /**
     * An analysis result including blockers and warnings.
     */
    analysis?: MoveAnalysisResult;
    /**
     * The user friendly display name of the analysis. E.g. IAM, organization policy etc.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
}
