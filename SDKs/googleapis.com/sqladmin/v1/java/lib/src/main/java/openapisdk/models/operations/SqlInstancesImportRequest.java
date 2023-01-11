package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesImportRequest {
    public SqlInstancesImportPathParams pathParams;
    public SqlInstancesImportRequest withPathParams(SqlInstancesImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesImportQueryParams queryParams;
    public SqlInstancesImportRequest withQueryParams(SqlInstancesImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesImportRequest request;
    public SqlInstancesImportRequest withRequest(openapisdk.models.shared.InstancesImportRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesImportSecurity security;
    public SqlInstancesImportRequest withSecurity(SqlInstancesImportSecurity security) {
        this.security = security;
        return this;
    }
}