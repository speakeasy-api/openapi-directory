import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://routes.twilio.com"];
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
     * Fetch the Inbound Processing Region assigned to a phone number.
     */
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, security: operations.FetchPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchSipDomain(req: operations.FetchSipDomainRequest, security: operations.FetchSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipDomainResponse>;
    /**
     * Fetch the Inbound Processing Region assigned to a SIP Trunk.
     */
    fetchTrunks(req: operations.FetchTrunksRequest, security: operations.FetchTrunksSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrunksResponse>;
    /**
     * Assign an Inbound Processing Region to a phone number.
     */
    updatePhoneNumber(req: operations.UpdatePhoneNumberRequest, security: operations.UpdatePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    updateSipDomain(req: operations.UpdateSipDomainRequest, security: operations.UpdateSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipDomainResponse>;
    /**
     * Assign an Inbound Processing Region to a SIP Trunk
     */
    updateTrunks(req: operations.UpdateTrunksRequest, security: operations.UpdateTrunksSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTrunksResponse>;
}
