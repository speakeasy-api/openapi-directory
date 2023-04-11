import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Creators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of game creators.
     */
    creatorsList(req: operations.CreatorsListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsListResponse>;
    /**
     * Get details of the creator.
     */
    creatorsRead(req: operations.CreatorsReadRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsReadResponse>;
}
