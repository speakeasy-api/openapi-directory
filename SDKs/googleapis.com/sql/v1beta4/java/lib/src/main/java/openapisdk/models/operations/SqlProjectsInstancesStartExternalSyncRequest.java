package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesStartExternalSyncRequest {
    public SqlProjectsInstancesStartExternalSyncPathParams pathParams;
    public SqlProjectsInstancesStartExternalSyncRequest withPathParams(SqlProjectsInstancesStartExternalSyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlProjectsInstancesStartExternalSyncQueryParams queryParams;
    public SqlProjectsInstancesStartExternalSyncRequest withQueryParams(SqlProjectsInstancesStartExternalSyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SqlInstancesStartExternalSyncRequest request;
    public SqlProjectsInstancesStartExternalSyncRequest withRequest(openapisdk.models.shared.SqlInstancesStartExternalSyncRequest request) {
        this.request = request;
        return this;
    }
    public SqlProjectsInstancesStartExternalSyncSecurity security;
    public SqlProjectsInstancesStartExternalSyncRequest withSecurity(SqlProjectsInstancesStartExternalSyncSecurity security) {
        this.security = security;
        return this;
    }
}