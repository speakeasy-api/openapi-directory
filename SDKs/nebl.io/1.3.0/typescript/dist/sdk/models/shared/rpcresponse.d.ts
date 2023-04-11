import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing the JSON response from the Neblio node.
 */
export declare class RpcResponse extends SpeakeasyBase {
    /**
     * Object containing any error information.
     */
    error?: Record<string, any>;
    /**
     * Identifier of RCP caller
     */
    id?: string;
    /**
     * Object containing the response output.
     */
    result?: Record<string, any>;
}
