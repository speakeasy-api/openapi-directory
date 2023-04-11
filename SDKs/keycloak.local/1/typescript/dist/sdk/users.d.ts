import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the user
     */
    deleteRealmUsersId(req: operations.DeleteRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdResponse>;
    /**
     * Revoke consent and offline tokens for particular client from user
     */
    deleteRealmUsersIdConsentsClient(req: operations.DeleteRealmUsersIdConsentsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdConsentsClientResponse>;
    /**
     * Remove a credential for a user
     */
    deleteRealmUsersIdCredentialsCredentialId(req: operations.DeleteRealmUsersIdCredentialsCredentialIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdCredentialsCredentialIdResponse>;
    /**
     * Remove a social login provider from user
     */
    deleteRealmUsersIdFederatedIdentityProvider(req: operations.DeleteRealmUsersIdFederatedIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdFederatedIdentityProviderResponse>;
    deleteRealmUsersIdGroupsGroupId(req: operations.DeleteRealmUsersIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdGroupsGroupIdResponse>;
    /**
     * Get users   Returns a list of users, filtered according to query parameters
     */
    getRealmUsers(req: operations.GetRealmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersResponse>;
    /**
     * Returns the number of users that match the given criteria.
     */
    getRealmUsersCount(req: operations.GetRealmUsersCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersCountResponse>;
    /**
     * Get representation of the user
     */
    getRealmUsersId(req: operations.GetRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdResponse>;
    /**
     * Return credential types, which are provided by the user storage where user is stored.
     */
    getRealmUsersIdConfiguredUserStorageCredentialTypes(req: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse>;
    /**
     * Get consents granted by the user
     */
    getRealmUsersIdConsents(req: operations.GetRealmUsersIdConsentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdConsentsResponse>;
    getRealmUsersIdCredentials(req: operations.GetRealmUsersIdCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdCredentialsResponse>;
    /**
     * Get social logins associated with the user
     */
    getRealmUsersIdFederatedIdentity(req: operations.GetRealmUsersIdFederatedIdentityRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdFederatedIdentityResponse>;
    getRealmUsersIdGroups(req: operations.GetRealmUsersIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdGroupsResponse>;
    getRealmUsersIdGroupsCount(req: operations.GetRealmUsersIdGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdGroupsCountResponse>;
    /**
     * Get offline sessions associated with the user and client
     */
    getRealmUsersIdOfflineSessionsClientId(req: operations.GetRealmUsersIdOfflineSessionsClientIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdOfflineSessionsClientIdResponse>;
    /**
     * Get sessions associated with the user
     */
    getRealmUsersIdSessions(req: operations.GetRealmUsersIdSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdSessionsResponse>;
    /**
     * Create a new user   Username must be unique.
     */
    postRealmUsers(req: operations.PostRealmUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersResponse>;
    /**
     * Move a credential to a position behind another credential
     */
    postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(req: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse>;
    /**
     * Move a credential to a first position in the credentials list of the user
     */
    postRealmUsersIdCredentialsCredentialIdMoveToFirst(req: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse>;
    /**
     * Add a social login provider to the user
     */
    postRealmUsersIdFederatedIdentityProvider(req: operations.PostRealmUsersIdFederatedIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdFederatedIdentityProviderResponse>;
    /**
     * Impersonate the user
     */
    postRealmUsersIdImpersonation(req: operations.PostRealmUsersIdImpersonationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdImpersonationResponse>;
    /**
     * Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
     */
    postRealmUsersIdLogout(req: operations.PostRealmUsersIdLogoutRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdLogoutResponse>;
    /**
     * Update the user
     */
    putRealmUsersId(req: operations.PutRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdResponse>;
    /**
     * Update a credential label for a user
     */
    putRealmUsersIdCredentialsCredentialIdUserLabel(req: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse>;
    /**
     * Disable all credentials for a user of a specific type
     */
    putRealmUsersIdDisableCredentialTypes(req: operations.PutRealmUsersIdDisableCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdDisableCredentialTypesResponse>;
    /**
     * Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
     */
    putRealmUsersIdExecuteActionsEmail(req: operations.PutRealmUsersIdExecuteActionsEmailRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdExecuteActionsEmailResponse>;
    putRealmUsersIdGroupsGroupId(req: operations.PutRealmUsersIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdGroupsGroupIdResponse>;
    /**
     * Set up a new password for the user.
     */
    putRealmUsersIdResetPassword(req: operations.PutRealmUsersIdResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdResetPasswordResponse>;
    /**
     * Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
     */
    putRealmUsersIdSendVerifyEmail(req: operations.PutRealmUsersIdSendVerifyEmailRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdSendVerifyEmailResponse>;
}
