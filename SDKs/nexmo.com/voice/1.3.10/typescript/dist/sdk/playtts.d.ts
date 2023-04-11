import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Start or stop playing Text to Speech in to an active call
 */
export declare class PlayTTS {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Play text to speech into a call
     *
     * @remarks
     * Play text to speech into a call
     */
    startTalk(req: operations.StartTalkRequest, security: operations.StartTalkSecurity, config?: AxiosRequestConfig): Promise<operations.StartTalkResponse>;
    /**
     * Stop text to speech in a call
     *
     * @remarks
     * Stop text to speech in a call
     */
    stopTalk(req: operations.StopTalkRequest, security: operations.StopTalkSecurity, config?: AxiosRequestConfig): Promise<operations.StopTalkResponse>;
}
