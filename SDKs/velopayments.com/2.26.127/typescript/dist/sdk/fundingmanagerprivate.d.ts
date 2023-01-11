import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FundingManagerPrivate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createFundingAccountV2 - Create Funding Account
     *
     * Create Funding Account
    **/
    createFundingAccountV2(req: operations.CreateFundingAccountV2Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingAccountV2Response>;
    /**
     * deleteSourceAccountV3 - Delete a source account by ID
     *
     * Mark a source account as deleted by ID
    **/
    deleteSourceAccountV3(req: operations.DeleteSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.DeleteSourceAccountV3Response>;
}
