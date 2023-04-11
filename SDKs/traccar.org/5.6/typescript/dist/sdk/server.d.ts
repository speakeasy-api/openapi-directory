import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Server information
 */
export declare class Server {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch Server information
     */
    getServer(config?: AxiosRequestConfig): Promise<operations.GetServerResponse>;
    /**
     * Update Server information
     */
    putServer(req: shared.Server, config?: AxiosRequestConfig): Promise<operations.PutServerResponse>;
}
