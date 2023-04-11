import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UrlInspection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Index inspection.
     */
    searchconsoleUrlInspectionIndexInspect(req: operations.SearchconsoleUrlInspectionIndexInspectRequest, security: operations.SearchconsoleUrlInspectionIndexInspectSecurity, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlInspectionIndexInspectResponse>;
}
