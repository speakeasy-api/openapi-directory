import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collectionstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the status of a collection from your Merchant Center account.
     */
    contentCollectionstatusesGet(req: operations.ContentCollectionstatusesGetRequest, security: operations.ContentCollectionstatusesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionstatusesGetResponse>;
    /**
     * Lists the statuses of the collections in your Merchant Center account.
     */
    contentCollectionstatusesList(req: operations.ContentCollectionstatusesListRequest, security: operations.ContentCollectionstatusesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionstatusesListResponse>;
}
