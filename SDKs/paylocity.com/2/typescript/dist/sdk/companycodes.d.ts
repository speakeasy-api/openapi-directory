import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompanyCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get All Company Codes
     *
     * @remarks
     * Get All Company Codes for the selected company and resource
     */
    getAllCompanyCodesAndDescriptionsByResource(req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest, security: operations.GetAllCompanyCodesAndDescriptionsByResourceSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse>;
}
