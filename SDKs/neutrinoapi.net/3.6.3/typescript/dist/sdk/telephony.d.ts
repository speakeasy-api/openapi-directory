import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Telephony {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * HLR Lookup
     *
     * @remarks
     * Connect to the global mobile cellular network and retrieve the status of a mobile device
     */
    hlrLookup(req: operations.HLRLookupRequest, config?: AxiosRequestConfig): Promise<operations.HLRLookupResponse>;
    /**
     * Phone Playback
     *
     * @remarks
     * Make an automated call to any valid phone number and playback an audio message
     */
    phonePlayback(req: operations.PhonePlaybackRequestBody, config?: AxiosRequestConfig): Promise<operations.PhonePlaybackResponse>;
    /**
     * Phone Verify
     *
     * @remarks
     * Make an automated call to any valid phone number and playback a unique security code
     */
    phoneVerify(req: operations.PhoneVerifyRequestBody, config?: AxiosRequestConfig): Promise<operations.PhoneVerifyResponse>;
    /**
     * SMS Verify
     *
     * @remarks
     * Send a unique security code to any mobile device via SMS
     */
    smsVerify(req: operations.SMSVerifyRequestBody, config?: AxiosRequestConfig): Promise<operations.SMSVerifyResponse>;
    /**
     * Verify Security Code
     *
     * @remarks
     * Check if a security code sent via SMS Verify or Phone Verify is valid
     */
    verifySecurityCode(req: operations.VerifySecurityCodeRequest, config?: AxiosRequestConfig): Promise<operations.VerifySecurityCodeResponse>;
}
