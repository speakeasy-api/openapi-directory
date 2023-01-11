package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesVerifyExternalSyncSettingsRequest {
    public SqlProjectsInstancesVerifyExternalSyncSettingsPathParams pathParams;
    public SqlProjectsInstancesVerifyExternalSyncSettingsRequest withPathParams(SqlProjectsInstancesVerifyExternalSyncSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams queryParams;
    public SqlProjectsInstancesVerifyExternalSyncSettingsRequest withQueryParams(SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SqlInstancesVerifyExternalSyncSettingsRequest request;
    public SqlProjectsInstancesVerifyExternalSyncSettingsRequest withRequest(openapisdk.models.shared.SqlInstancesVerifyExternalSyncSettingsRequest request) {
        this.request = request;
        return this;
    }
    public SqlProjectsInstancesVerifyExternalSyncSettingsSecurity security;
    public SqlProjectsInstancesVerifyExternalSyncSettingsRequest withSecurity(SqlProjectsInstancesVerifyExternalSyncSettingsSecurity security) {
        this.security = security;
        return this;
    }
}