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
    /**
     * Fetch a specific Country.
     */
    fetchTrunkingCountry(req: operations.FetchTrunkingCountryRequest, security: operations.FetchTrunkingCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingCountryResponse>;
    /**
     * Fetch pricing information for a specific destination and, optionally, origination phone number.
     */
    fetchTrunkingNumber(req: operations.FetchTrunkingNumberRequest, security: operations.FetchTrunkingNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingNumberResponse>;
    /**
     * Fetch a specific Country.
     */
    fetchVoiceCountry(req: operations.FetchVoiceCountryRequest, security: operations.FetchVoiceCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    /**
     * Fetch pricing information for a specific destination and, optionally, origination phone number.
     */
    fetchVoiceNumber(req: operations.FetchVoiceNumberRequest, security: operations.FetchVoiceNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    listTrunkingCountry(req: operations.ListTrunkingCountryRequest, security: operations.ListTrunkingCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrunkingCountryResponse>;
    listVoiceCountry(req: operations.ListVoiceCountryRequest, security: operations.ListVoiceCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
