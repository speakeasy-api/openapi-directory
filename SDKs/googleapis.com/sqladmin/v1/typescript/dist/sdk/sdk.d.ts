import { BackupRuns } from "./backupruns";
import { Connect } from "./connect";
import { Databases } from "./databases";
import { Flags } from "./flags";
import { Instances } from "./instances";
import { Operations } from "./operations";
import { Projects } from "./projects";
import { SslCerts } from "./sslcerts";
import { Tiers } from "./tiers";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sqladmin.googleapis.com/"];
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
 * API for Cloud SQL database instance management
 *
 * @see {@link https://developers.google.com/cloud-sql/}
 */
export declare class SDK {
    backupRuns: BackupRuns;
    connect: Connect;
    databases: Databases;
    flags: Flags;
    instances: Instances;
    operations: Operations;
    projects: Projects;
    sslCerts: SslCerts;
    tiers: Tiers;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
