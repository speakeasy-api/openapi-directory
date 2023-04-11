import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompanyController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * All branches defined for a company
     */
    companyControllerGetBranches(req: operations.CompanyControllerGetBranchesRequest, config?: AxiosRequestConfig): Promise<operations.CompanyControllerGetBranchesResponse>;
    /**
     * Get a specific branch given its unique Object ID (OID)
     */
    getV3DiaryShortNameCompanyBranchesBranchID(req: operations.GetV3DiaryShortNameCompanyBranchesBranchIDRequest, config?: AxiosRequestConfig): Promise<operations.GetV3DiaryShortNameCompanyBranchesBranchIDResponse>;
}
