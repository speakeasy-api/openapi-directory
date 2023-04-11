import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BranchController {
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
    branchControllerGetBranches(req: operations.BranchControllerGetBranchesRequest, config?: AxiosRequestConfig): Promise<operations.BranchControllerGetBranchesResponse>;
    /**
     * Get a specific branch given its unique Object ID (OID)
     */
    getV2CustomerShortNameBranchBranchesBranchID(req: operations.GetV2CustomerShortNameBranchBranchesBranchIDRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse>;
}
