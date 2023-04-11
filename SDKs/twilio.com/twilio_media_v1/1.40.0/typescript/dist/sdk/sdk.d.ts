import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://media.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    createMediaProcessor(req: operations.CreateMediaProcessorCreateMediaProcessorRequest, security: operations.CreateMediaProcessorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMediaProcessorResponse>;
    createPlayerStreamer(req: operations.CreatePlayerStreamerCreatePlayerStreamerRequest, security: operations.CreatePlayerStreamerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerResponse>;
    createPlayerStreamerPlaybackGrant(req: operations.CreatePlayerStreamerPlaybackGrantRequest, security: operations.CreatePlayerStreamerPlaybackGrantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerPlaybackGrantResponse>;
    /**
     * Deletes a MediaRecording resource identified by a SID.
     */
    deleteMediaRecording(req: operations.DeleteMediaRecordingRequest, security: operations.DeleteMediaRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMediaRecordingResponse>;
    /**
     * Returns a single MediaProcessor resource identified by a SID.
     */
    fetchMediaProcessor(req: operations.FetchMediaProcessorRequest, security: operations.FetchMediaProcessorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMediaProcessorResponse>;
    /**
     * Returns a single MediaRecording resource identified by a SID.
     */
    fetchMediaRecording(req: operations.FetchMediaRecordingRequest, security: operations.FetchMediaRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMediaRecordingResponse>;
    /**
     * Returns a single PlayerStreamer resource identified by a SID.
     */
    fetchPlayerStreamer(req: operations.FetchPlayerStreamerRequest, security: operations.FetchPlayerStreamerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerResponse>;
    /**
     * **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
     */
    fetchPlayerStreamerPlaybackGrant(req: operations.FetchPlayerStreamerPlaybackGrantRequest, security: operations.FetchPlayerStreamerPlaybackGrantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerPlaybackGrantResponse>;
    /**
     * Returns a list of MediaProcessors.
     */
    listMediaProcessor(req: operations.ListMediaProcessorRequest, security: operations.ListMediaProcessorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMediaProcessorResponse>;
    /**
     * Returns a list of MediaRecordings.
     */
    listMediaRecording(req: operations.ListMediaRecordingRequest, security: operations.ListMediaRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMediaRecordingResponse>;
    /**
     * Returns a list of PlayerStreamers.
     */
    listPlayerStreamer(req: operations.ListPlayerStreamerRequest, security: operations.ListPlayerStreamerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPlayerStreamerResponse>;
    /**
     * Updates a MediaProcessor resource identified by a SID.
     */
    updateMediaProcessor(req: operations.UpdateMediaProcessorRequest, security: operations.UpdateMediaProcessorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMediaProcessorResponse>;
    /**
     * Updates a PlayerStreamer resource identified by a SID.
     */
    updatePlayerStreamer(req: operations.UpdatePlayerStreamerRequest, security: operations.UpdatePlayerStreamerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdatePlayerStreamerResponse>;
}
