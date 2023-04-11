import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orderreturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Acks an order return in your Merchant Center account.
     */
    contentOrderreturnsAcknowledge(req: operations.ContentOrderreturnsAcknowledgeRequest, security: operations.ContentOrderreturnsAcknowledgeSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsAcknowledgeResponse>;
    /**
     * Create return in your Merchant Center account.
     */
    contentOrderreturnsCreateorderreturn(req: operations.ContentOrderreturnsCreateorderreturnRequest, security: operations.ContentOrderreturnsCreateorderreturnSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsCreateorderreturnResponse>;
    /**
     * Retrieves an order return from your Merchant Center account.
     */
    contentOrderreturnsGet(req: operations.ContentOrderreturnsGetRequest, security: operations.ContentOrderreturnsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsGetResponse>;
    /**
     * Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
     */
    contentOrderreturnsLabelsCreate(req: operations.ContentOrderreturnsLabelsCreateRequest, security: operations.ContentOrderreturnsLabelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsLabelsCreateResponse>;
    /**
     * Lists order returns in your Merchant Center account.
     */
    contentOrderreturnsList(req: operations.ContentOrderreturnsListRequest, security: operations.ContentOrderreturnsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsListResponse>;
    /**
     * Processes return in your Merchant Center account.
     */
    contentOrderreturnsProcess(req: operations.ContentOrderreturnsProcessRequest, security: operations.ContentOrderreturnsProcessSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsProcessResponse>;
}
