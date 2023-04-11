import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GetResolutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch all available resolution on different OS
     *
     * @remarks
     * Fetch all available resolution on different OS
     */
    resolutions(config?: AxiosRequestConfig): Promise<operations.ResolutionsResponse>;
}
