package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesRestoreBackupRequest {
    public SqlInstancesRestoreBackupPathParams pathParams;
    public SqlInstancesRestoreBackupRequest withPathParams(SqlInstancesRestoreBackupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesRestoreBackupQueryParams queryParams;
    public SqlInstancesRestoreBackupRequest withQueryParams(SqlInstancesRestoreBackupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesRestoreBackupRequest request;
    public SqlInstancesRestoreBackupRequest withRequest(openapisdk.models.shared.InstancesRestoreBackupRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesRestoreBackupSecurity security;
    public SqlInstancesRestoreBackupRequest withSecurity(SqlInstancesRestoreBackupSecurity security) {
        this.security = security;
        return this;
    }
}