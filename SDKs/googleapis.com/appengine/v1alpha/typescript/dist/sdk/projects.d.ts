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
     * Gets information about a location.
     */
    appengineProjectsLocationsGet(req: operations.AppengineProjectsLocationsGetRequest, security: operations.AppengineProjectsLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsGetResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    appengineProjectsLocationsList(req: operations.AppengineProjectsLocationsListRequest, security: operations.AppengineProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsListResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    appengineProjectsLocationsOperationsGet(req: operations.AppengineProjectsLocationsOperationsGetRequest, security: operations.AppengineProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     */
    appengineProjectsLocationsOperationsList(req: operations.AppengineProjectsLocationsOperationsListRequest, security: operations.AppengineProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsOperationsListResponse>;
}
