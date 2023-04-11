import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DataTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bad Word Filter
     *
     * @remarks
     * Detect bad words, swear words and profanity in a given text
     */
    badWordFilter(req: operations.BadWordFilterRequestBody, config?: AxiosRequestConfig): Promise<operations.BadWordFilterResponse>;
    /**
     * Email Validate
     *
     * @remarks
     * Parse, validate and clean an email address
     */
    emailValidate(req: operations.EmailValidateRequest, config?: AxiosRequestConfig): Promise<operations.EmailValidateResponse>;
    /**
     * Phone Validate
     *
     * @remarks
     * Parse, validate and get location information about a phone number
     */
    phoneValidate(req: operations.PhoneValidateRequest, config?: AxiosRequestConfig): Promise<operations.PhoneValidateResponse>;
    /**
     * UA Lookup
     *
     * @remarks
     * Parse, validate and get detailed user-agent information from a user agent string or from client hints
     */
    uaLookup(req: operations.UALookupRequest, config?: AxiosRequestConfig): Promise<operations.UALookupResponse>;
}
