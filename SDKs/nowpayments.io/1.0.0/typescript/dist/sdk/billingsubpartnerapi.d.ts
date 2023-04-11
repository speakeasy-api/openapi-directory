import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * NOWPayments allows you to create sub-partner accounts for your users, enabling full-fledged crypto billing solution.
 */
export declare class BillingSubPartnerAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all transfers
     *
     * @remarks
     * Returns the entire list of transfers created by your sub-partners.
     */
    getAllTransfers(req: operations.GetAllTransfersRequest, config?: AxiosRequestConfig): Promise<operations.GetAllTransfersResponse>;
    /**
     * Get sub-partner balance
     *
     * @remarks
     * This request can be made only from a whitelisted IP.
     * If IP whitelisting is disabled, this request can be made by any user that has an API key.
     */
    getSubPartnerBalance(req: operations.GetSubPartnerBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetSubPartnerBalanceResponse>;
    /**
     * Get sub-partners
     *
     * @remarks
     * This method returns the entire list of your sub-partners.
     */
    getSubPartners(req: operations.GetSubPartnersRequest, config?: AxiosRequestConfig): Promise<operations.GetSubPartnersResponse>;
    /**
     * Get transfer
     *
     * @remarks
     * Get the actual information about the transfer. You need to provide the transfer ID in the request.
     */
    getTransfer(req: operations.GetTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetTransferResponse>;
}
