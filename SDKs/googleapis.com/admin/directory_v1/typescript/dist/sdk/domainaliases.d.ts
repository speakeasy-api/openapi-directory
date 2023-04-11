import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DomainAliases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a domain Alias of the customer.
     */
    directoryDomainAliasesDelete(req: operations.DirectoryDomainAliasesDeleteRequest, security: operations.DirectoryDomainAliasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesDeleteResponse>;
    /**
     * Retrieves a domain alias of the customer.
     */
    directoryDomainAliasesGet(req: operations.DirectoryDomainAliasesGetRequest, security: operations.DirectoryDomainAliasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesGetResponse>;
    /**
     * Inserts a domain alias of the customer.
     */
    directoryDomainAliasesInsert(req: operations.DirectoryDomainAliasesInsertRequest, security: operations.DirectoryDomainAliasesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesInsertResponse>;
    /**
     * Lists the domain aliases of the customer.
     */
    directoryDomainAliasesList(req: operations.DirectoryDomainAliasesListRequest, security: operations.DirectoryDomainAliasesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesListResponse>;
}
