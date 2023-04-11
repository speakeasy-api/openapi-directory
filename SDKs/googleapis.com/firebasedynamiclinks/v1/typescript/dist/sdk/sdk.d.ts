import { ManagedShortLinks } from "./managedshortlinks";
import { ShortLinks } from "./shortlinks";
import { V1 } from "./v1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://firebasedynamiclinks.googleapis.com/"];
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
 * Programmatically creates and manages Firebase Dynamic Links.
 *
 * @see {@link https://firebase.google.com/docs/dynamic-links/}
 */
export declare class SDK {
    managedShortLinks: ManagedShortLinks;
    shortLinks: ShortLinks;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
