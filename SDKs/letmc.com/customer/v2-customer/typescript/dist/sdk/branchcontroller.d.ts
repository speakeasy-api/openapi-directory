import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BranchController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * branchControllerGetBranches - All branches defined for a company
    **/
    branchControllerGetBranches(req: operations.BranchControllerGetBranchesRequest, config?: AxiosRequestConfig): Promise<operations.BranchControllerGetBranchesResponse>;
    /**
     * getV2CustomerShortNameBranchBranchesBranchId - Get a specific branch given its unique Object ID (OID)
    **/
    getV2CustomerShortNameBranchBranchesBranchId(req: operations.GetV2CustomerShortNameBranchBranchesBranchIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CustomerShortNameBranchBranchesBranchIdResponse>;
}
