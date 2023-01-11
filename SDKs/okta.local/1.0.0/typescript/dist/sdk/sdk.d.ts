import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { CreateUser } from "./createuser";
import { CredentialOperations } from "./credentialoperations";
import { LifecycleOperations } from "./lifecycleoperations";
export declare const ServerList: readonly ["http://okta.local", "https://,"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
    /**
     * clearUserSessions - Clear User Sessions
     *
     * Clear User Sessions
    **/
    clearUserSessions(req: operations.ClearUserSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ClearUserSessionsResponse>;
    /**
     * resetFactors - Reset Factors
     *
     * Reset Factors
    **/
    resetFactors(req: operations.ResetFactorsRequest, config?: AxiosRequestConfig): Promise<operations.ResetFactorsResponse>;
}
