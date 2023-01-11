package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesExportRequest {
    public SqlInstancesExportPathParams pathParams;
    public SqlInstancesExportRequest withPathParams(SqlInstancesExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesExportQueryParams queryParams;
    public SqlInstancesExportRequest withQueryParams(SqlInstancesExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesExportRequest request;
    public SqlInstancesExportRequest withRequest(openapisdk.models.shared.InstancesExportRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesExportSecurity security;
    public SqlInstancesExportRequest withSecurity(SqlInstancesExportSecurity security) {
        this.security = security;
        return this;
    }
}