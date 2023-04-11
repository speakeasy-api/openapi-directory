import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a job.
     */
    runNamespacesJobsCreate(req: operations.RunNamespacesJobsCreateRequest, security: operations.RunNamespacesJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsCreateResponse>;
    /**
     * Delete a job.
     */
    runNamespacesJobsDelete(req: operations.RunNamespacesJobsDeleteRequest, security: operations.RunNamespacesJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsDeleteResponse>;
    /**
     * Get information about a job.
     */
    runNamespacesJobsGet(req: operations.RunNamespacesJobsGetRequest, security: operations.RunNamespacesJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsGetResponse>;
    /**
     * List jobs.
     */
    runNamespacesJobsList(req: operations.RunNamespacesJobsListRequest, security: operations.RunNamespacesJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsListResponse>;
}
