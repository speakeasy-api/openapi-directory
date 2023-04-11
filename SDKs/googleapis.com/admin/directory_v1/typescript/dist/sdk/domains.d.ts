import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a domain of the customer.
     */
    directoryDomainsDelete(req: operations.DirectoryDomainsDeleteRequest, security: operations.DirectoryDomainsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsDeleteResponse>;
    /**
     * Retrieves a domain of the customer.
     */
    directoryDomainsGet(req: operations.DirectoryDomainsGetRequest, security: operations.DirectoryDomainsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsGetResponse>;
    /**
     * Inserts a domain of the customer.
     */
    directoryDomainsInsert(req: operations.DirectoryDomainsInsertRequest, security: operations.DirectoryDomainsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsInsertResponse>;
    /**
     * Lists the domains of the customer.
     */
    directoryDomainsList(req: operations.DirectoryDomainsListRequest, security: operations.DirectoryDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsListResponse>;
}
