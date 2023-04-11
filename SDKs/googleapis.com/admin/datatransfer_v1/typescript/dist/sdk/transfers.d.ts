import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transfers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a data transfer request by its resource ID.
     */
    datatransferTransfersGet(req: operations.DatatransferTransfersGetRequest, security: operations.DatatransferTransfersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersGetResponse>;
    /**
     * Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
     */
    datatransferTransfersInsert(req: operations.DatatransferTransfersInsertRequest, security: operations.DatatransferTransfersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersInsertResponse>;
    /**
     * Lists the transfers for a customer by source user, destination user, or status.
     */
    datatransferTransfersList(req: operations.DatatransferTransfersListRequest, security: operations.DatatransferTransfersListSecurity, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersListResponse>;
}
