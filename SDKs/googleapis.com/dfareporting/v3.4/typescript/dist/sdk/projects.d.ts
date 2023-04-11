import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one project by ID.
     */
    dfareportingProjectsGet(req: operations.DfareportingProjectsGetRequest, security: operations.DfareportingProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingProjectsGetResponse>;
    /**
     * Retrieves a list of projects, possibly filtered. This method supports paging .
     */
    dfareportingProjectsList(req: operations.DfareportingProjectsListRequest, security: operations.DfareportingProjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingProjectsListResponse>;
}
