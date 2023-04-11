import { AccessPolicies } from "./accesspolicies";
import { Operations } from "./operations";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://accesscontextmanager.googleapis.com/"];
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
 * An API for setting attribute based access control to requests to Google Cloud services.
 *
 * @see {@link https://cloud.google.com/access-context-manager/docs/reference/rest/}
 */
export declare class SDK {
    accessPolicies: AccessPolicies;
    operations: Operations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
