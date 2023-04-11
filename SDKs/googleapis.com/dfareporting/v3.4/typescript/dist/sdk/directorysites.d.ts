import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DirectorySites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one directory site by ID.
     */
    dfareportingDirectorySitesGet(req: operations.DfareportingDirectorySitesGetRequest, security: operations.DfareportingDirectorySitesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesGetResponse>;
    /**
     * Inserts a new directory site.
     */
    dfareportingDirectorySitesInsert(req: operations.DfareportingDirectorySitesInsertRequest, security: operations.DfareportingDirectorySitesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesInsertResponse>;
    /**
     * Retrieves a list of directory sites, possibly filtered. This method supports paging.
     */
    dfareportingDirectorySitesList(req: operations.DfareportingDirectorySitesListRequest, security: operations.DfareportingDirectorySitesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesListResponse>;
}
