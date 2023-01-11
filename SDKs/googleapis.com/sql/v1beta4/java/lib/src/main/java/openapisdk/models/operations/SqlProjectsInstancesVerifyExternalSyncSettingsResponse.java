package openapisdk.models.operations;



public class SqlProjectsInstancesVerifyExternalSyncSettingsResponse {
    public String contentType;
    public SqlProjectsInstancesVerifyExternalSyncSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SqlInstancesVerifyExternalSyncSettingsResponse sqlInstancesVerifyExternalSyncSettingsResponse;
    public SqlProjectsInstancesVerifyExternalSyncSettingsResponse withSqlInstancesVerifyExternalSyncSettingsResponse(openapisdk.models.shared.SqlInstancesVerifyExternalSyncSettingsResponse sqlInstancesVerifyExternalSyncSettingsResponse) {
        this.sqlInstancesVerifyExternalSyncSettingsResponse = sqlInstancesVerifyExternalSyncSettingsResponse;
        return this;
    }
    public Long statusCode;
    public SqlProjectsInstancesVerifyExternalSyncSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}