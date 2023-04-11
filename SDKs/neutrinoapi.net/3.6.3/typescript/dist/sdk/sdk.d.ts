import { DataTools } from "./datatools";
import { ECommerce } from "./ecommerce";
import { Geolocation } from "./geolocation";
import { Imaging } from "./imaging";
import * as shared from "./models/shared";
import { SecurityAndNetworking } from "./securityandnetworking";
import { Telephony } from "./telephony";
import { Www } from "./www";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://neutrinoapi.net"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The general-purpose API
 */
export declare class SDK {
    dataTools: DataTools;
    eCommerce: ECommerce;
    geolocation: Geolocation;
    imaging: Imaging;
    securityAndNetworking: SecurityAndNetworking;
    telephony: Telephony;
    www: Www;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
