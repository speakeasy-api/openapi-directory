import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SMS Conversion Request
 */
export declare class SMSConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Tell Nexmo if your SMS message was successful
     *
     * @remarks
     * Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.
     */
    smsConversion(req: operations.SmsConversionRequest, config?: AxiosRequestConfig): Promise<operations.SmsConversionResponse>;
}
