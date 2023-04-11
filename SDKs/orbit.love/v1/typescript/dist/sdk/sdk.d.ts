import { Activities } from "./activities";
import { ActivityTypes } from "./activitytypes";
import { Members } from "./members";
import { Notes } from "./notes";
import { Organizations } from "./organizations";
import { Reports } from "./reports";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { Workspaces } from "./workspaces";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://app.orbit.love/api/v1"];
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
 * Please see the complete Orbit API documentation at [https://api.orbit.love/](https://api.orbit.love/).
 */
export declare class SDK {
    activities: Activities;
    activityTypes: ActivityTypes;
    members: Members;
    notes: Notes;
    organizations: Organizations;
    reports: Reports;
    users: Users;
    webhooks: Webhooks;
    workspaces: Workspaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
