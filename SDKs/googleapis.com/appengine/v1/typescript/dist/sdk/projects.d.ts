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
}
