import { SpeakeasyBase } from "../../../internal/utils";
export declare class RpcRequest extends SpeakeasyBase {
    /**
     * Identifier of RCP caller
     */
    id: string;
    /**
     * JSON-RPC version
     */
    jsonrpc: string;
    /**
     * Name of the Neblio RPC method to call
     */
    method: string;
    /**
     * Array of string params that should be passed to the RPC method.
     */
    params: string[];
}
