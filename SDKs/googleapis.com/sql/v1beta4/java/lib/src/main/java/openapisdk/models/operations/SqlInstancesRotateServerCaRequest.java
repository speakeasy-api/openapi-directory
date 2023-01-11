package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesRotateServerCaRequest {
    public SqlInstancesRotateServerCaPathParams pathParams;
    public SqlInstancesRotateServerCaRequest withPathParams(SqlInstancesRotateServerCaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesRotateServerCaQueryParams queryParams;
    public SqlInstancesRotateServerCaRequest withQueryParams(SqlInstancesRotateServerCaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesRotateServerCaRequest request;
    public SqlInstancesRotateServerCaRequest withRequest(openapisdk.models.shared.InstancesRotateServerCaRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesRotateServerCaSecurity security;
    public SqlInstancesRotateServerCaRequest withSecurity(SqlInstancesRotateServerCaSecurity security) {
        this.security = security;
        return this;
    }
}