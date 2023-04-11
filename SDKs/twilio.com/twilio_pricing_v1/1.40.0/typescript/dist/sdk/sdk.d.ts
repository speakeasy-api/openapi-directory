import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://pricing.twilio.com"];
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
    fetchMessagingCountry(req: operations.FetchMessagingCountryRequest, security: operations.FetchMessagingCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMessagingCountryResponse>;
    fetchPhoneNumberCountry(req: operations.FetchPhoneNumberCountryRequest, security: operations.FetchPhoneNumberCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberCountryResponse>;
    fetchVoiceCountry(req: operations.FetchVoiceCountryRequest, security: operations.FetchVoiceCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    fetchVoiceNumber(req: operations.FetchVoiceNumberRequest, security: operations.FetchVoiceNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    listMessagingCountry(req: operations.ListMessagingCountryRequest, security: operations.ListMessagingCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMessagingCountryResponse>;
    listPhoneNumberCountry(req: operations.ListPhoneNumberCountryRequest, security: operations.ListPhoneNumberCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberCountryResponse>;
    listVoiceCountry(req: operations.ListVoiceCountryRequest, security: operations.ListVoiceCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
