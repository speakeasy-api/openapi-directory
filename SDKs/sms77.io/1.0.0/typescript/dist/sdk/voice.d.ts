import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api/voice} - Issue voice call to phone number
 */
export declare class Voice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    voice(req: operations.VoiceRequest, config?: AxiosRequestConfig): Promise<operations.VoiceResponse>;
}
