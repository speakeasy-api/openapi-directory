import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeMetadata } from "./runtimemetadata";
import { Status } from "./status";
import { TemplateMetadata } from "./templatemetadata";
/**
 * Template Type.
 */
export declare enum GetTemplateResponseTemplateTypeEnum {
    Unknown = "UNKNOWN",
    Legacy = "LEGACY",
    Flex = "FLEX"
}
/**
 * The response to a GetTemplate request.
 */
export declare class GetTemplateResponse extends SpeakeasyBase {
    /**
     * Metadata describing a template.
     */
    metadata?: TemplateMetadata;
    /**
     * RuntimeMetadata describing a runtime environment.
     */
    runtimeMetadata?: RuntimeMetadata;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
    /**
     * Template Type.
     */
    templateType?: GetTemplateResponseTemplateTypeEnum;
}
