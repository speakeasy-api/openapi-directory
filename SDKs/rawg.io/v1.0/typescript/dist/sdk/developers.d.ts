import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Developers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of game developers.
     */
    developersList(req: operations.DevelopersListRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersListResponse>;
    /**
     * Get details of the developer.
     */
    developersRead(req: operations.DevelopersReadRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersReadResponse>;
}
