import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrderDocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one order document by ID.
     */
    dfareportingOrderDocumentsGet(req: operations.DfareportingOrderDocumentsGetRequest, security: operations.DfareportingOrderDocumentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOrderDocumentsGetResponse>;
    /**
     * Retrieves a list of order documents, possibly filtered. This method supports paging.
     */
    dfareportingOrderDocumentsList(req: operations.DfareportingOrderDocumentsListRequest, security: operations.DfareportingOrderDocumentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOrderDocumentsListResponse>;
}
