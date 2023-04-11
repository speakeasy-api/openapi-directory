import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class JsonRpc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Send a JSON-RPC call to a localhost neblio-Qt or nebliod node
     *
     * @remarks
     * Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1
     */
    jsonRpc(req: shared.RpcRequest, security: operations.JsonRpcSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.JsonRpcResponse>;
}
