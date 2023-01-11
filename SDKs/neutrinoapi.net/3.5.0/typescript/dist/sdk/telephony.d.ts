import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Telephony {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * hlrLookup - HLR Lookup
     *
     * Connect to the global mobile cellular network and retrieve the status of a mobile device
    **/
    hlrLookup(req: operations.HlrLookupRequest, config?: AxiosRequestConfig): Promise<operations.HlrLookupResponse>;
    /**
     * phonePlayback - Phone Playback
     *
     * Make an automated call to any valid phone number and playback an audio message
    **/
    phonePlayback(req: operations.PhonePlaybackRequest, config?: AxiosRequestConfig): Promise<operations.PhonePlaybackResponse>;
    /**
     * phoneVerify - Phone Verify
     *
     * Make an automated call to any valid phone number and playback a unique security code
    **/
    phoneVerify(req: operations.PhoneVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PhoneVerifyResponse>;
    /**
     * smsMessage - SMS Message
     *
     * Send a free-form message to any mobile device via SMS
    **/
    smsMessage(req: operations.SmsMessageRequest, config?: AxiosRequestConfig): Promise<operations.SmsMessageResponse>;
    /**
     * smsVerify - SMS Verify
     *
     * Send a unique security code to any mobile device via SMS
    **/
    smsVerify(req: operations.SmsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.SmsVerifyResponse>;
    /**
     * verifySecurityCode - Verify Security Code
     *
     * Check if a security code sent via SMS Verify or Phone Verify is valid
    **/
    verifySecurityCode(req: operations.VerifySecurityCodeRequest, config?: AxiosRequestConfig): Promise<operations.VerifySecurityCodeResponse>;
}
