import { Accounts } from "./accounts";
import { DefaultSupportedIdps } from "./defaultsupportedidps";
import { Projects } from "./projects";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://identitytoolkit.googleapis.com/"];
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
 * The Google Identity Toolkit API lets you use open standards to verify a user's identity.
 *
 * @see {@link https://cloud.google.com/identity-platform}
 */
export declare class SDK {
    accounts: Accounts;
    defaultSupportedIdps: DefaultSupportedIdps;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
