import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>
 *
 * @remarks
 *
 */
export declare class Funding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Funding Request
     *
     * @remarks
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
     */
    createFundingRequestV2(req: operations.CreateFundingRequestV2Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestV2Response>;
    /**
     * Create Funding Request
     *
     * @remarks
     * <p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>
     *
     */
    createFundingRequestV3(req: operations.CreateFundingRequestV3Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestV3Response>;
    /**
     * Get Funding Account
     *
     * @remarks
     * Get Funding Account by ID
     */
    getFundingAccountV2(req: operations.GetFundingAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountV2Response>;
    /**
     * Get Funding Accounts
     *
     * @remarks
     * Get the funding accounts.
     */
    getFundingAccountsV2(req: operations.GetFundingAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountsV2Response>;
    /**
     * Get Funding
     *
     * @remarks
     * Get Funding by Id
     */
    getFundingByIdV1(req: operations.GetFundingByIdV1Request, config?: AxiosRequestConfig): Promise<operations.GetFundingByIdV1Response>;
    /**
     * Get Funding Audit Delta
     *
     * @remarks
     * Get funding audit deltas for a payor
     */
    listFundingAuditDeltas(req: operations.ListFundingAuditDeltasRequest, config?: AxiosRequestConfig): Promise<operations.ListFundingAuditDeltasResponse>;
}
