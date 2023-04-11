import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete file
     *
     * @remarks
     * Deletes previously uploaded file
     */
    deleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * Delete image
     *
     * @remarks
     * Deletes previously uploaded image
     */
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * Flag
     *
     * @remarks
     * Reports message or user for review by moderators
     */
    flag(req: shared.FlagRequest, config?: AxiosRequestConfig): Promise<operations.FlagResponse>;
    /**
     * Get OG
     *
     * @remarks
     * Get an OpenGraph attachment for a link
     */
    getOG(req: operations.GetOGRequest, config?: AxiosRequestConfig): Promise<operations.GetOGResponse>;
    /**
     * Mark channels as read
     *
     * @remarks
     * Marks channels as read up to the specific message. If no channels is given, mark all channel as read
     */
    markChannelsRead(req: shared.MarkChannelsReadRequest, config?: AxiosRequestConfig): Promise<operations.MarkChannelsReadResponse>;
    /**
     * Query Message Flags
     *
     * @remarks
     * Find and filter message flags
     */
    queryMessageFlags(req: operations.QueryMessageFlagsRequest, config?: AxiosRequestConfig): Promise<operations.QueryMessageFlagsResponse>;
    /**
     * Search messages
     *
     * @remarks
     * Search messages across channels
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Translate message
     *
     * @remarks
     * Translates message to a given language using automated translation software
     */
    translateMessage(req: operations.TranslateMessageRequest, config?: AxiosRequestConfig): Promise<operations.TranslateMessageResponse>;
    /**
     * Unflag
     *
     * @remarks
     * Removes previously created user or message flag
     */
    unflag(req: shared.FlagRequest, config?: AxiosRequestConfig): Promise<operations.UnflagResponse>;
    /**
     * Update message
     *
     * @remarks
     * Updates message with new data
     */
    updateMessage(req: operations.UpdateMessageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessageResponse>;
    /**
     * Partially message update
     *
     * @remarks
     * Updates certain fields of the message
     */
    updateMessagePartial(req: operations.UpdateMessagePartialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessagePartialResponse>;
}
