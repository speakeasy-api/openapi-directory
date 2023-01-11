import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Developers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * developersList - Get a list of game developers.
    **/
    developersList(req: operations.DevelopersListRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersListResponse>;
    /**
     * developersRead - Get details of the developer.
    **/
    developersRead(req: operations.DevelopersReadRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersReadResponse>;
}
