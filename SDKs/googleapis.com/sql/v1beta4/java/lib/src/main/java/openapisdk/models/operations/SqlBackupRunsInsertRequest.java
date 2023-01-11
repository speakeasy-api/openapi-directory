package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlBackupRunsInsertRequest {
    public SqlBackupRunsInsertPathParams pathParams;
    public SqlBackupRunsInsertRequest withPathParams(SqlBackupRunsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlBackupRunsInsertQueryParams queryParams;
    public SqlBackupRunsInsertRequest withQueryParams(SqlBackupRunsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BackupRun request;
    public SqlBackupRunsInsertRequest withRequest(openapisdk.models.shared.BackupRun request) {
        this.request = request;
        return this;
    }
    public SqlBackupRunsInsertSecurity security;
    public SqlBackupRunsInsertRequest withSecurity(SqlBackupRunsInsertSecurity security) {
        this.security = security;
        return this;
    }
}