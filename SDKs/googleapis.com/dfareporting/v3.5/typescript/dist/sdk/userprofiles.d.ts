import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one user profile by ID.
     */
    dfareportingUserProfilesGet(req: operations.DfareportingUserProfilesGetRequest, security: operations.DfareportingUserProfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserProfilesGetResponse>;
    /**
     * Retrieves list of user profiles for a user.
     */
    dfareportingUserProfilesList(req: operations.DfareportingUserProfilesListRequest, security: operations.DfareportingUserProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserProfilesListResponse>;
}
