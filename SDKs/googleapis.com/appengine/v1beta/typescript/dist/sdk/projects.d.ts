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
     * Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
     */
    appengineProjectsLocationsApplicationsCreate(req: operations.AppengineProjectsLocationsApplicationsCreateRequest, security: operations.AppengineProjectsLocationsApplicationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsCreateResponse>;
    /**
     * Gets information about an application.
     */
    appengineProjectsLocationsApplicationsGet(req: operations.AppengineProjectsLocationsApplicationsGetRequest, security: operations.AppengineProjectsLocationsApplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsGetResponse>;
    /**
     * Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
     */
    appengineProjectsLocationsApplicationsRepair(req: operations.AppengineProjectsLocationsApplicationsRepairRequest, security: operations.AppengineProjectsLocationsApplicationsRepairSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsRepairResponse>;
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
