import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class KeysApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    keysApiCurrent(req: operations.KeysApiCurrentRequest, config?: AxiosRequestConfig): Promise<operations.KeysApiCurrentResponse>;
    keysApiCustom(req: operations.KeysApiCustomRequest, config?: AxiosRequestConfig): Promise<operations.KeysApiCustomResponse>;
    keysApiExpiry(req: operations.KeysApiExpiryRequest, config?: AxiosRequestConfig): Promise<operations.KeysApiExpiryResponse>;
    keysApiFind(req: operations.KeysApiFindRequest, config?: AxiosRequestConfig): Promise<operations.KeysApiFindResponse>;
}
