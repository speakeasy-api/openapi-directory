import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Ban user
     *
     * @remarks
     * Restricts user activity either in specific channel or globally
     */
    ban(req: shared.BanRequest, config?: AxiosRequestConfig): Promise<operations.BanResponse>;
    /**
     * Connect (WebSocket)
     *
     * @remarks
     * Establishes WebSocket connection for user
     */
    connect(req: operations.ConnectRequest, config?: AxiosRequestConfig): Promise<operations.ConnectResponse>;
    /**
     * Create guest
     *
     * @remarks
     * Creates guest user
     */
    createGuest(req: shared.GuestRequest, config?: AxiosRequestConfig): Promise<operations.CreateGuestResponse>;
    /**
     * Deactivate users
     *
     * @remarks
     * Deactivate users in batches
     */
    deactivateUsers(req: shared.DeactivateUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateUsersResponse>;
    /**
     * Delete Users
     *
     * @remarks
     * Deletes users and optionally all their belongings asynchronously.
     */
    deleteUsers(req: shared.DeleteUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersResponse>;
    /**
     * Export users
     *
     * @remarks
     * Exports user profile, reactions and messages for list of given users
     */
    exportUser(req: shared.ExportUsersRequest, config?: AxiosRequestConfig): Promise<operations.ExportUserResponse>;
    /**
     * Flag
     *
     * @remarks
     * Reports message or user for review by moderators
     */
    flag(req: shared.FlagRequest, config?: AxiosRequestConfig): Promise<operations.FlagResponse>;
    /**
     * Long Poll (Transport)
     *
     * @remarks
     * WebSocket fallback transport endpoint
     */
    longPoll(req: operations.LongPollRequest, config?: AxiosRequestConfig): Promise<operations.LongPollResponse>;
    /**
     * Mute user
     *
     * @remarks
     * Mutes one or several users
     */
    muteUser(req: shared.MuteUserRequest, config?: AxiosRequestConfig): Promise<operations.MuteUserResponse>;
    /**
     * Query Banned Users
     *
     * @remarks
     * Find and filter channel scoped or global user bans
     */
    queryBannedUsers(req: operations.QueryBannedUsersRequest, config?: AxiosRequestConfig): Promise<operations.QueryBannedUsersResponse>;
    /**
     * Query users
     *
     * @remarks
     * Find and filter users
     */
    queryUsers(req: operations.QueryUsersRequest, config?: AxiosRequestConfig): Promise<operations.QueryUsersResponse>;
    /**
     * Reactivate users
     *
     * @remarks
     * Reactivate users in batches
     */
    reactivateUsers(req: shared.ReactivateUsersRequest, config?: AxiosRequestConfig): Promise<operations.ReactivateUsersResponse>;
    /**
     * Restore users
     *
     * @remarks
     * Restore soft deleted users
     */
    restoreUsers(req: shared.RestoreUsersRequest, config?: AxiosRequestConfig): Promise<operations.RestoreUsersResponse>;
    /**
     * Unban user
     *
     * @remarks
     * Removes previously applied ban
     */
    unban(req: operations.UnbanRequest, config?: AxiosRequestConfig): Promise<operations.UnbanResponse>;
    /**
     * Unflag
     *
     * @remarks
     * Removes previously created user or message flag
     */
    unflag(req: shared.FlagRequest, config?: AxiosRequestConfig): Promise<operations.UnflagResponse>;
    /**
     * Unmute user
     *
     * @remarks
     * Unmutes previously muted user
     */
    unmuteUser(req: shared.UnmuteUserRequest, config?: AxiosRequestConfig): Promise<operations.UnmuteUserResponse>;
    /**
     * Upsert users
     *
     * @remarks
     * Update or create users in bulk
     */
    updateUsers(req: shared.UpdateUsersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsersResponse>;
    /**
     * Partially update user
     *
     * @remarks
     * Updates certain fields of the user
     */
    updateUsersPartial(req: shared.UpdateUserPartialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsersPartialResponse>;
}
