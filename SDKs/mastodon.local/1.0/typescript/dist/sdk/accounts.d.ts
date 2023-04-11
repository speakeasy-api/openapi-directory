import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sets a private note on a user.
     */
    getApiV1AccountsRelationships(req: operations.GetApiV1AccountsRelationshipsRequest, security: operations.GetApiV1AccountsRelationshipsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsRelationshipsResponse>;
    /**
     * Search for matching accounts by username or display name.
     */
    getApiV1AccountsSearch(req: operations.GetApiV1AccountsSearchRequest, security: operations.GetApiV1AccountsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsSearchResponse>;
    /**
     * Test to make sure that the user token works.
     */
    getApiV1AccountsVerifyCredentials(config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsVerifyCredentialsResponse>;
    getApiV1AccountsId(req: operations.GetApiV1AccountsIdRequest, security: operations.GetApiV1AccountsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdResponse>;
    /**
     * Tags featured by this account.
     */
    getApiV1AccountsIdFeaturedTags(req: operations.GetApiV1AccountsIdFeaturedTagsRequest, security: operations.GetApiV1AccountsIdFeaturedTagsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdFeaturedTagsResponse>;
    /**
     * Accounts which follow the given account, if network is not hidden by the account owner.
     */
    getApiV1AccountsIdFollowers(req: operations.GetApiV1AccountsIdFollowersRequest, security: operations.GetApiV1AccountsIdFollowersSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdFollowersResponse>;
    /**
     * Accounts which the given account is following, if network is not hidden by the account owner.
     */
    getApiV1AccountsIdFollowing(req: operations.GetApiV1AccountsIdFollowingRequest, security: operations.GetApiV1AccountsIdFollowingSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdFollowingResponse>;
    /**
     * Array of IdentityProof
     */
    getApiV1AccountsIdIdentityProofs(req: operations.GetApiV1AccountsIdIdentityProofsRequest, security: operations.GetApiV1AccountsIdIdentityProofsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdIdentityProofsResponse>;
    /**
     * User lists that you have added this account to.
     */
    getApiV1AccountsIdLists(req: operations.GetApiV1AccountsIdListsRequest, security: operations.GetApiV1AccountsIdListsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdListsResponse>;
    /**
     * Statuses posted to the given account.
     */
    getApiV1AccountsIdStatuses(req: operations.GetApiV1AccountsIdStatusesRequest, security: operations.GetApiV1AccountsIdStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AccountsIdStatusesResponse>;
    /**
     * Update the user's display and preferences.
     */
    patchApiV1AccountsUpdateCredentials(req: Uint8Array, security: operations.PatchApiV1AccountsUpdateCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchApiV1AccountsUpdateCredentialsResponse>;
    /**
     * Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
     */
    postApiV1Accounts(req: Uint8Array, security: operations.PostApiV1AccountsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsResponse>;
    /**
     * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
     */
    postApiV1AccountsIdBlock(req: operations.PostApiV1AccountsIdBlockRequest, security: operations.PostApiV1AccountsIdBlockSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdBlockResponse>;
    /**
     * Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
     */
    postApiV1AccountsIdFollow(req: operations.PostApiV1AccountsIdFollowRequest, security: operations.PostApiV1AccountsIdFollowSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdFollowResponse>;
    /**
     * Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
     */
    postApiV1AccountsIdMute(req: operations.PostApiV1AccountsIdMuteRequest, security: operations.PostApiV1AccountsIdMuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdMuteResponse>;
    /**
     * Sets a private note on a user.
     */
    postApiV1AccountsIdNote(req: operations.PostApiV1AccountsIdNoteRequest, security: operations.PostApiV1AccountsIdNoteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdNoteResponse>;
    /**
     * Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
     */
    postApiV1AccountsIdPin(req: operations.PostApiV1AccountsIdPinRequest, security: operations.PostApiV1AccountsIdPinSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdPinResponse>;
    /**
     * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
     */
    postApiV1AccountsIdUnblock(req: operations.PostApiV1AccountsIdUnblockRequest, security: operations.PostApiV1AccountsIdUnblockSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdUnblockResponse>;
    /**
     * Unfollow the given account.
     */
    postApiV1AccountsIdUnfollow(req: operations.PostApiV1AccountsIdUnfollowRequest, security: operations.PostApiV1AccountsIdUnfollowSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdUnfollowResponse>;
    /**
     * Unmute the given account.
     */
    postApiV1AccountsIdUnmute(req: operations.PostApiV1AccountsIdUnmuteRequest, security: operations.PostApiV1AccountsIdUnmuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdUnmuteResponse>;
    /**
     * Remove the given account from the user's featured profiles.
     */
    postApiV1AccountsIdUnpin(req: operations.PostApiV1AccountsIdUnpinRequest, security: operations.PostApiV1AccountsIdUnpinSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AccountsIdUnpinResponse>;
}
