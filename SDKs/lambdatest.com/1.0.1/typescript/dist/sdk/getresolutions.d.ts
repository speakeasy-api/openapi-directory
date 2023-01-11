import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetResolutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resolutions - Fetch all available resolution on different OS
     *
     * Fetch all available resolution on different OS
    **/
    resolutions(req: operations.ResolutionsRequest, config?: AxiosRequestConfig): Promise<operations.ResolutionsResponse>;
}
