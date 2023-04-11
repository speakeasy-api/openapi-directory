import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class People {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
     */
    plusPeopleGet(req: operations.PlusPeopleGetRequest, security: operations.PlusPeopleGetSecurity, config?: AxiosRequestConfig): Promise<operations.PlusPeopleGetResponse>;
    /**
     * List all of the people in the specified collection.
     */
    plusPeopleList(req: operations.PlusPeopleListRequest, security: operations.PlusPeopleListSecurity, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListResponse>;
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusPeopleListByActivity(req: operations.PlusPeopleListByActivityRequest, security: operations.PlusPeopleListByActivitySecurity, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListByActivityResponse>;
    /**
     * Shut down. See https://developers.google.com/+/api-shutdown for more details.
     */
    plusPeopleSearch(req: operations.PlusPeopleSearchRequest, security: operations.PlusPeopleSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PlusPeopleSearchResponse>;
}
