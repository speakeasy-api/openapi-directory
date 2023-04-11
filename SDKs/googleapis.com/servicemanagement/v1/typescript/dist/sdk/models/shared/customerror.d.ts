import { SpeakeasyBase } from "../../../internal/utils";
import { CustomErrorRule } from "./customerrorrule";
/**
 * Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError
 */
export declare class CustomError extends SpeakeasyBase {
    /**
     * The list of custom error rules that apply to individual API messages. **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: CustomErrorRule[];
    /**
     * The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.
     */
    types?: string[];
}
