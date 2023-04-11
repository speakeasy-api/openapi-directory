import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes channels asynchronously
     *
     * @remarks
     * Allows to delete several channels at once asynchronously
     */
    deleteChannels(req: shared.DeleteChannelsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelsResponse>;
    /**
     * Export channels
     *
     * @remarks
     * Exports channel data to JSON file
     */
    exportChannels(req: shared.ExportChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ExportChannelsResponse>;
    /**
     * Mark channels as read
     *
     * @remarks
     * Marks channels as read up to the specific message. If no channels is given, mark all channel as read
     */
    markChannelsRead(req: shared.MarkChannelsReadRequest, config?: AxiosRequestConfig): Promise<operations.MarkChannelsReadResponse>;
    /**
     * Mute channel
     *
     * @remarks
     * Mutes channel for user
     */
    muteChannel(req: shared.MuteChannelRequest, config?: AxiosRequestConfig): Promise<operations.MuteChannelResponse>;
    /**
     * Query channels
     *
     * @remarks
     * Query channels with filter query
     */
    queryChannels(req: operations.QueryChannelsRequest, config?: AxiosRequestConfig): Promise<operations.QueryChannelsResponse>;
    /**
     * Query members
     *
     * @remarks
     * Find and filter channel members
     */
    queryMembers(req: operations.QueryMembersRequest, config?: AxiosRequestConfig): Promise<operations.QueryMembersResponse>;
    /**
     * Search messages
     *
     * @remarks
     * Search messages across channels
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Sync
     *
     * @remarks
     * Returns all events happened since client disconnect in specified channels
     */
    sync(req: operations.SyncRequest, config?: AxiosRequestConfig): Promise<operations.SyncResponse>;
    /**
     * Unmute channel
     *
     * @remarks
     * Unmutes channel for user
     */
    unmuteChannel(req: shared.UnmuteChannelRequest, config?: AxiosRequestConfig): Promise<operations.UnmuteChannelResponse>;
}
