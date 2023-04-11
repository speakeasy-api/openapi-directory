import { Data } from "./data";
import { Management } from "./management";
import { Metadata } from "./metadata";
import { Provisioning } from "./provisioning";
import { UserDeletion } from "./userdeletion";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://analytics.googleapis.com/analytics/v3"];
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
 * Views and manages your Google Analytics data.
 *
 * @see {@link https://developers.google.com/analytics/}
 */
export declare class SDK {
    data: Data;
    management: Management;
    metadata: Metadata;
    provisioning: Provisioning;
    userDeletion: UserDeletion;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
