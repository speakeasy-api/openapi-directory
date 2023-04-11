import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Moderation {
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
     * Create block list
     *
     * @remarks
     * Creates a new application blocklist, once created the blocklist can be used by any channel type
     */
    createBlockList(req: shared.CreateBlockListRequest, config?: AxiosRequestConfig): Promise<operations.CreateBlockListResponse>;
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
     * Flag
     *
     * @remarks
     * Reports message or user for review by moderators
     */
    flag(req: shared.FlagRequest, config?: AxiosRequestConfig): Promise<operations.FlagResponse>;
    /**
     * List block lists
     *
     * @remarks
     * Returns all available block lists
     */
    listBlockLists(config?: AxiosRequestConfig): Promise<operations.ListBlockListsResponse>;
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
     * Query Message Flags
     *
     * @remarks
     * Find and filter message flags
     */
    queryMessageFlags(req: operations.QueryMessageFlagsRequest, config?: AxiosRequestConfig): Promise<operations.QueryMessageFlagsResponse>;
    /**
     * Reactivate users
     *
     * @remarks
     * Reactivate users in batches
     */
    reactivateUsers(req: shared.ReactivateUsersRequest, config?: AxiosRequestConfig): Promise<operations.ReactivateUsersResponse>;
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
}
