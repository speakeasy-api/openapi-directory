import { CreateUser } from "./createuser";
import { CredentialOperations } from "./credentialoperations";
import { LifecycleOperations } from "./lifecycleoperations";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://okta.local", "https://,"];
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
 * The [Okta User API](/docs/api/rest/users.html) provides operations to manage users in your organization.
 */
export declare class SDK {
    createUser: CreateUser;
    credentialOperations: CredentialOperations;
    lifecycleOperations: LifecycleOperations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Clear User Sessions
     *
     * @remarks
     * Clear User Sessions
     */
    clearUserSessions(req: operations.ClearUserSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ClearUserSessionsResponse>;
    /**
     * Reset Factors
     *
     * @remarks
     * Reset Factors
     */
    resetFactors(req: operations.ResetFactorsRequest, config?: AxiosRequestConfig): Promise<operations.ResetFactorsResponse>;
}
