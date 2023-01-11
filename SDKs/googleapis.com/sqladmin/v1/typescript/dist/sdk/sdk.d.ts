import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://sqladmin.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
