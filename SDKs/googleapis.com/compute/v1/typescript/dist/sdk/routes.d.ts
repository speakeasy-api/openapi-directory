import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified Route resource.
     */
    computeRoutesDelete(req: operations.ComputeRoutesDeleteRequest, security: operations.ComputeRoutesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutesDeleteResponse>;
    /**
     * Returns the specified Route resource.
     */
    computeRoutesGet(req: operations.ComputeRoutesGetRequest, security: operations.ComputeRoutesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutesGetResponse>;
    /**
     * Creates a Route resource in the specified project using the data included in the request.
     */
    computeRoutesInsert(req: operations.ComputeRoutesInsertRequest, security: operations.ComputeRoutesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutesInsertResponse>;
    /**
     * Retrieves the list of Route resources available to the specified project.
     */
    computeRoutesList(req: operations.ComputeRoutesListRequest, security: operations.ComputeRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutesListResponse>;
}
