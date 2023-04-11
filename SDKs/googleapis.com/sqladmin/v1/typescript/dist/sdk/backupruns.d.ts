import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BackupRuns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the backup taken by a backup run.
     */
    sqlBackupRunsDelete(req: operations.SqlBackupRunsDeleteRequest, security: operations.SqlBackupRunsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsDeleteResponse>;
    /**
     * Retrieves a resource containing information about a backup run.
     */
    sqlBackupRunsGet(req: operations.SqlBackupRunsGetRequest, security: operations.SqlBackupRunsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsGetResponse>;
    /**
     * Creates a new backup run on demand.
     */
    sqlBackupRunsInsert(req: operations.SqlBackupRunsInsertRequest, security: operations.SqlBackupRunsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsInsertResponse>;
    /**
     * Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
     */
    sqlBackupRunsList(req: operations.SqlBackupRunsListRequest, security: operations.SqlBackupRunsListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsListResponse>;
}
