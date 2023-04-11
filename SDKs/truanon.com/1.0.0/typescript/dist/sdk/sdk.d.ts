import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://staging.truanon.com"];
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
 * Welcome to TruAnon!
 *
 * @remarks
 * Thank you for helping make the Internet a safer place to be.
 *
 * Adopting TruAnon is simple. There is no setup or dependencies, nothing to store or process. Making identity part of your service is fun, and you’ll be up and running in a matter of minutes.
 *
 * TruAnon Private Token is used anytime you request information from TruAnon and you must edit this into the Variables section for this collection.
 *
 * This API contains two endpoints and both require these same two arguments, also found in the Variables section of this collection.
 *
 * These two arguments are:
 *
 * TruAnon Service Identifier
 *
 * and
 *
 * Your Member Name
 *
 * Your TruAnon Service Identifier was provided by TruAnon and is likely the root domain of your site or service. Your Member Name is the unique member ID on your system that you would like to query.
 *
 * Information is continuously updated for display purposes and aside from performance considerations, there should be no need to capture or save anything from TruAnon.
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
     * Get Profile
     *
     * @remarks
     * get_profile Private API: Request confirmed profile data for your unique member ID
     */
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * Get Token
     *
     * @remarks
     * request_token Private API: Request a Proof token to let the member confirm in a popup interface
     *
     *         {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}
     *
     * Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
     *
     *         https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio
     */
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
}
