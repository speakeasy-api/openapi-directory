package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesFailoverRequest {
    public SqlInstancesFailoverPathParams pathParams;
    public SqlInstancesFailoverRequest withPathParams(SqlInstancesFailoverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesFailoverQueryParams queryParams;
    public SqlInstancesFailoverRequest withQueryParams(SqlInstancesFailoverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesFailoverRequest request;
    public SqlInstancesFailoverRequest withRequest(openapisdk.models.shared.InstancesFailoverRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesFailoverSecurity security;
    public SqlInstancesFailoverRequest withSecurity(SqlInstancesFailoverSecurity security) {
        this.security = security;
        return this;
    }
}