import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusActivitiesGet(req: operations.PlusActivitiesGetRequest, security: operations.PlusActivitiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesGetResponse>;
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusActivitiesList(req: operations.PlusActivitiesListRequest, security: operations.PlusActivitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesListResponse>;
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusActivitiesSearch(req: operations.PlusActivitiesSearchRequest, security: operations.PlusActivitiesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesSearchResponse>;
}
