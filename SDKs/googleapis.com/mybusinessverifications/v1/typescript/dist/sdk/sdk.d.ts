import { Locations } from "./locations";
import { VerificationTokens } from "./verificationtokens";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://mybusinessverifications.googleapis.com/"];
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
 * The My Business Verifications API provides an interface for taking verifications related actions for locations.
 *
 * @see {@link https://developers.google.com/my-business/}
 */
export declare class SDK {
    locations: Locations;
    verificationTokens: VerificationTokens;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
