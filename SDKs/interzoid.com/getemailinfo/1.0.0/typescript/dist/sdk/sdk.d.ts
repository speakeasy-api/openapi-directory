import { EmailAddressInformation } from "./emailaddressinformation";
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
 * This API provides validation information for email addresses to aid in deliverability. Syntax, existence of mail servers, and other tests are run to ensure delivery. Additional demographics are provided for the email address as well, including identifying generic, vulgar, education, government, or other entity type email addresses.
 *
 * @see {@link https://www.interzoid.com/services/getemailinfo} - API home page and documentation
 */
export declare class SDK {
    emailAddressInformation: EmailAddressInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
