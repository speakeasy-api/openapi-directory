import { SpeakeasyBase } from "../../../internal/utils";
import { ProtobufAny } from "./protobufany";
/**
 * An unexpected error response.
 */
export declare class GooglerpcStatus extends SpeakeasyBase {
    code?: number;
    details?: ProtobufAny[];
    message?: string;
}
