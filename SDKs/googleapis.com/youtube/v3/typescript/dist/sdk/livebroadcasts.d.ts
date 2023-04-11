import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveBroadcasts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bind a broadcast to a stream.
     */
    youtubeLiveBroadcastsBind(req: operations.YoutubeLiveBroadcastsBindRequest, security: operations.YoutubeLiveBroadcastsBindSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsBindResponse>;
    /**
     * Delete a given broadcast.
     */
    youtubeLiveBroadcastsDelete(req: operations.YoutubeLiveBroadcastsDeleteRequest, security: operations.YoutubeLiveBroadcastsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsDeleteResponse>;
    /**
     * Inserts a new stream for the authenticated user.
     */
    youtubeLiveBroadcastsInsert(req: operations.YoutubeLiveBroadcastsInsertRequest, security: operations.YoutubeLiveBroadcastsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsInsertResponse>;
    /**
     * Insert cuepoints in a broadcast
     */
    youtubeLiveBroadcastsInsertCuepoint(req: operations.YoutubeLiveBroadcastsInsertCuepointRequest, security: operations.YoutubeLiveBroadcastsInsertCuepointSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsInsertCuepointResponse>;
    /**
     * Retrieve the list of broadcasts associated with the given channel.
     */
    youtubeLiveBroadcastsList(req: operations.YoutubeLiveBroadcastsListRequest, security: operations.YoutubeLiveBroadcastsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsListResponse>;
    /**
     * Transition a broadcast to a given status.
     */
    youtubeLiveBroadcastsTransition(req: operations.YoutubeLiveBroadcastsTransitionRequest, security: operations.YoutubeLiveBroadcastsTransitionSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsTransitionResponse>;
    /**
     * Updates an existing broadcast for the authenticated user.
     */
    youtubeLiveBroadcastsUpdate(req: operations.YoutubeLiveBroadcastsUpdateRequest, security: operations.YoutubeLiveBroadcastsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsUpdateResponse>;
}
