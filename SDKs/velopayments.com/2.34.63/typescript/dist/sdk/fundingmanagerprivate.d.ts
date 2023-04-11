import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FundingManagerPrivate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Funding Account
     *
     * @remarks
     * Create Funding Account
     */
    createFundingAccountV2(req: shared.CreateFundingAccountRequestV2, config?: AxiosRequestConfig): Promise<operations.CreateFundingAccountV2Response>;
    /**
     * Delete a source account by ID
     *
     * @remarks
     * Mark a source account as deleted by ID
     */
    deleteSourceAccountV3(req: operations.DeleteSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.DeleteSourceAccountV3Response>;
}
