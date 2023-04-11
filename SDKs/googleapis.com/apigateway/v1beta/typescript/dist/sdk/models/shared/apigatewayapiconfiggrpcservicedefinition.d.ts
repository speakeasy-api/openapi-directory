import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
/**
 * A gRPC service definition.
 */
export declare class ApigatewayApiConfigGrpcServiceDefinition extends SpeakeasyBase {
    /**
     * A lightweight description of a file.
     */
    fileDescriptorSet?: ApigatewayApiConfigFile;
    /**
     * Optional. Uncompiled proto files associated with the descriptor set, used for display purposes (server-side compilation is not supported). These should match the inputs to 'protoc' command used to generate file_descriptor_set.
     */
    source?: ApigatewayApiConfigFile[];
}
