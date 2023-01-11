import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * badWordFilter - Bad Word Filter
     *
     * Detect bad words, swear words and profanity in a given text
    **/
    badWordFilter(req: operations.BadWordFilterRequest, config?: AxiosRequestConfig): Promise<operations.BadWordFilterResponse>;
    /**
     * emailValidate - Email Validate
     *
     * Parse, validate and clean an email address
    **/
    emailValidate(req: operations.EmailValidateRequest, config?: AxiosRequestConfig): Promise<operations.EmailValidateResponse>;
    /**
     * phoneValidate - Phone Validate
     *
     * Parse, validate and get location information about a phone number
    **/
    phoneValidate(req: operations.PhoneValidateRequest, config?: AxiosRequestConfig): Promise<operations.PhoneValidateResponse>;
    /**
     * userAgentInfo - User Agent Info
     *
     * Parse, validate and get detailed user-agent information from a user agent string
    **/
    userAgentInfo(req: operations.UserAgentInfoRequest, config?: AxiosRequestConfig): Promise<operations.UserAgentInfoResponse>;
}
