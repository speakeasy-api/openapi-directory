import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveStreams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing stream for the authenticated user.
     */
    youtubeLiveStreamsDelete(req: operations.YoutubeLiveStreamsDeleteRequest, security: operations.YoutubeLiveStreamsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsDeleteResponse>;
    /**
     * Inserts a new stream for the authenticated user.
     */
    youtubeLiveStreamsInsert(req: operations.YoutubeLiveStreamsInsertRequest, security: operations.YoutubeLiveStreamsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsInsertResponse>;
    /**
     * Retrieve the list of streams associated with the given channel. --
     */
    youtubeLiveStreamsList(req: operations.YoutubeLiveStreamsListRequest, security: operations.YoutubeLiveStreamsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsListResponse>;
    /**
     * Updates an existing stream for the authenticated user.
     */
    youtubeLiveStreamsUpdate(req: operations.YoutubeLiveStreamsUpdateRequest, security: operations.YoutubeLiveStreamsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsUpdateResponse>;
}
