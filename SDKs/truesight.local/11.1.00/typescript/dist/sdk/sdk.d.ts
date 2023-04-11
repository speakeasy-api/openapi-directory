import { Actions } from "./actions";
import { Applications } from "./applications";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { HistoricalData } from "./historicaldata";
import { Services } from "./services";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://truesight.local", "/tsws/10.0/api/", "https://{hostname}:{port}/tsws/10.0/api/"];
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
 * Hardware Sentry TrueSight Presentation Server REST API
 */
export declare class SDK {
    /**
     * API operations to interact with the PATROL Agent.
     */
    actions: Actions;
    /**
     * API operations to interact with the monitored Applications.
     */
    applications: Applications;
    /**
     * API operations to interact with the monitored Devices.
     */
    devices: Devices;
    /**
     * API operations to interact with the monitored Groups.
     */
    groups: Groups;
    /**
     * API operations to get historical data.
     */
    historicalData: HistoricalData;
    /**
     * API operations to interact with the monitored Services.
     */
    services: Services;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
