import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CompanyCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllCompanyCodesAndDescriptionsByResource - Get All Company Codes
     *
     * Get All Company Codes for the selected company and resource
    **/
    getAllCompanyCodesAndDescriptionsByResource(req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse>;
}
