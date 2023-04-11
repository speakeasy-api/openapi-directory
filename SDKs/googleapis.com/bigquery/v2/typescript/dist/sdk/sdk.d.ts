import { Datasets } from "./datasets";
import { Jobs } from "./jobs";
import { Models } from "./models";
import { Projects } from "./projects";
import { Routines } from "./routines";
import { RowAccessPolicies } from "./rowaccesspolicies";
import { Tabledata } from "./tabledata";
import { Tables } from "./tables";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://bigquery.googleapis.com/bigquery/v2"];
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
 * A data platform for customers to create, manage, share and query data.
 *
 * @see {@link https://cloud.google.com/bigquery/}
 */
export declare class SDK {
    datasets: Datasets;
    jobs: Jobs;
    models: Models;
    projects: Projects;
    routines: Routines;
    rowAccessPolicies: RowAccessPolicies;
    tabledata: Tabledata;
    tables: Tables;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
