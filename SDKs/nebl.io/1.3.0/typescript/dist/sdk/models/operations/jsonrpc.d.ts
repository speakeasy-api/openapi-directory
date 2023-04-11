import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const JsonRpcServerList: readonly ["http://127.0.0.1:6326", "http://127.0.0.1:16326"];
export declare class JsonRpcSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class JsonRpcResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing the JSON response from the Neblio node.
     */
    rpcResponse?: shared.RpcResponse;
}
