import { Activities } from "./activities";
import { Channels } from "./channels";
import { CustomerUsageReports } from "./customerusagereports";
import { EntityUsageReports } from "./entityusagereports";
import { UserUsageReport } from "./userusagereport";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://admin.googleapis.com/"];
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
 * Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.
 *
 * @see {@link https://developers.google.com/admin-sdk/}
 */
export declare class SDK {
    activities: Activities;
    channels: Channels;
    customerUsageReports: CustomerUsageReports;
    entityUsageReports: EntityUsageReports;
    userUsageReport: UserUsageReport;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
