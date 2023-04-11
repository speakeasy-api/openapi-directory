import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountUserProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one account user profile by ID.
     */
    dfareportingAccountUserProfilesGet(req: operations.DfareportingAccountUserProfilesGetRequest, security: operations.DfareportingAccountUserProfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesGetResponse>;
    /**
     * Inserts a new account user profile.
     */
    dfareportingAccountUserProfilesInsert(req: operations.DfareportingAccountUserProfilesInsertRequest, security: operations.DfareportingAccountUserProfilesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesInsertResponse>;
    /**
     * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
     */
    dfareportingAccountUserProfilesList(req: operations.DfareportingAccountUserProfilesListRequest, security: operations.DfareportingAccountUserProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesListResponse>;
    /**
     * Updates an existing account user profile. This method supports patch semantics.
     */
    dfareportingAccountUserProfilesPatch(req: operations.DfareportingAccountUserProfilesPatchRequest, security: operations.DfareportingAccountUserProfilesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesPatchResponse>;
    /**
     * Updates an existing account user profile.
     */
    dfareportingAccountUserProfilesUpdate(req: operations.DfareportingAccountUserProfilesUpdateRequest, security: operations.DfareportingAccountUserProfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesUpdateResponse>;
}
