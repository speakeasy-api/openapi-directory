import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Start or stop streaming audio in to an active call
 */
export declare class StreamAudio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Play an audio file into a call
     *
     * @remarks
     * Play an audio file into a call
     */
    startStream(req: operations.StartStreamRequest, security: operations.StartStreamSecurity, config?: AxiosRequestConfig): Promise<operations.StartStreamResponse>;
    /**
     * Stop playing an audio file into a call
     *
     * @remarks
     * Stop playing an audio file into a call
     */
    stopStream(req: operations.StopStreamRequest, security: operations.StopStreamSecurity, config?: AxiosRequestConfig): Promise<operations.StopStreamResponse>;
}
