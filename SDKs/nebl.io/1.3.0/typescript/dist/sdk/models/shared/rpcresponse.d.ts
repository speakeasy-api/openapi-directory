import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing the JSON response from the Neblio node.
**/
export declare class RpcResponse extends SpeakeasyBase {
    error?: Record<string, any>;
    id?: string;
    result?: Record<string, any>;
}
