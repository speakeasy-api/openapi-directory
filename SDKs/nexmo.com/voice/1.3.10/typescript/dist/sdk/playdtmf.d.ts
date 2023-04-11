import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Play DTMF tones in to an active call
 */
export declare class PlayDTMF {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Play DTMF tones into a call
     *
     * @remarks
     * Play DTMF tones into a call
     */
    startDTMF(req: operations.StartDTMFRequest, security: operations.StartDTMFSecurity, config?: AxiosRequestConfig): Promise<operations.StartDTMFResponse>;
}
