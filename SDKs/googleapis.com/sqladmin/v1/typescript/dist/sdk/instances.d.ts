import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Instances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
     */
    sqlInstancesAddServerCa(req: operations.SqlInstancesAddServerCaRequest, security: operations.SqlInstancesAddServerCaSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesAddServerCaResponse>;
    /**
     * Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
     */
    sqlInstancesClone(req: operations.SqlInstancesCloneRequest, security: operations.SqlInstancesCloneSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesCloneResponse>;
    /**
     * Deletes a Cloud SQL instance.
     */
    sqlInstancesDelete(req: operations.SqlInstancesDeleteRequest, security: operations.SqlInstancesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesDeleteResponse>;
    /**
     * Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
     */
    sqlInstancesDemoteMaster(req: operations.SqlInstancesDemoteMasterRequest, security: operations.SqlInstancesDemoteMasterSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesDemoteMasterResponse>;
    /**
     * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
     */
    sqlInstancesExport(req: operations.SqlInstancesExportRequest, security: operations.SqlInstancesExportSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesExportResponse>;
    /**
     * Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
     */
    sqlInstancesFailover(req: operations.SqlInstancesFailoverRequest, security: operations.SqlInstancesFailoverSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesFailoverResponse>;
    /**
     * Retrieves a resource containing information about a Cloud SQL instance.
     */
    sqlInstancesGet(req: operations.SqlInstancesGetRequest, security: operations.SqlInstancesGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesGetResponse>;
    /**
     * Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
     */
    sqlInstancesImport(req: operations.SqlInstancesImportRequest, security: operations.SqlInstancesImportSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesImportResponse>;
    /**
     * Creates a new Cloud SQL instance.
     */
    sqlInstancesInsert(req: operations.SqlInstancesInsertRequest, security: operations.SqlInstancesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesInsertResponse>;
    /**
     * Lists instances under a given project.
     */
    sqlInstancesList(req: operations.SqlInstancesListRequest, security: operations.SqlInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesListResponse>;
    /**
     * Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
     */
    sqlInstancesListServerCas(req: operations.SqlInstancesListServerCasRequest, security: operations.SqlInstancesListServerCasSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesListServerCasResponse>;
    /**
     * Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
     */
    sqlInstancesPatch(req: operations.SqlInstancesPatchRequest, security: operations.SqlInstancesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesPatchResponse>;
    /**
     * Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
     */
    sqlInstancesPromoteReplica(req: operations.SqlInstancesPromoteReplicaRequest, security: operations.SqlInstancesPromoteReplicaSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesPromoteReplicaResponse>;
    /**
     * Deletes all client certificates and generates a new server SSL certificate for the instance.
     */
    sqlInstancesResetSslConfig(req: operations.SqlInstancesResetSslConfigRequest, security: operations.SqlInstancesResetSslConfigSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesResetSslConfigResponse>;
    /**
     * Restarts a Cloud SQL instance.
     */
    sqlInstancesRestart(req: operations.SqlInstancesRestartRequest, security: operations.SqlInstancesRestartSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRestartResponse>;
    /**
     * Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
     */
    sqlInstancesRestoreBackup(req: operations.SqlInstancesRestoreBackupRequest, security: operations.SqlInstancesRestoreBackupSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRestoreBackupResponse>;
    /**
     * Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
     */
    sqlInstancesRotateServerCa(req: operations.SqlInstancesRotateServerCaRequest, security: operations.SqlInstancesRotateServerCaSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRotateServerCaResponse>;
    /**
     * Starts the replication in the read replica instance.
     */
    sqlInstancesStartReplica(req: operations.SqlInstancesStartReplicaRequest, security: operations.SqlInstancesStartReplicaSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesStartReplicaResponse>;
    /**
     * Stops the replication in the read replica instance.
     */
    sqlInstancesStopReplica(req: operations.SqlInstancesStopReplicaRequest, security: operations.SqlInstancesStopReplicaSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesStopReplicaResponse>;
    /**
     * Truncate MySQL general and slow query log tables MySQL only.
     */
    sqlInstancesTruncateLog(req: operations.SqlInstancesTruncateLogRequest, security: operations.SqlInstancesTruncateLogSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesTruncateLogResponse>;
    /**
     * Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
     */
    sqlInstancesUpdate(req: operations.SqlInstancesUpdateRequest, security: operations.SqlInstancesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SqlInstancesUpdateResponse>;
}
