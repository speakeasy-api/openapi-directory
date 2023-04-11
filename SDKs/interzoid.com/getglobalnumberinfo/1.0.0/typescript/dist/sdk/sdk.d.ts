import { GlobalPhoneNumberInformation } from "./globalphonenumberinformation";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.interzoid.com"];
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
 * This API provides geographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.
 *
 * @see {@link https://www.interzoid.com/services/getglobalnumberinfo} - API home page and documentation
 */
export declare class SDK {
    globalPhoneNumberInformation: GlobalPhoneNumberInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
