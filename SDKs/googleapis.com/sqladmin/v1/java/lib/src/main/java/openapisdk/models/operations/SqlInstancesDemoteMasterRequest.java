package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesDemoteMasterRequest {
    public SqlInstancesDemoteMasterPathParams pathParams;
    public SqlInstancesDemoteMasterRequest withPathParams(SqlInstancesDemoteMasterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesDemoteMasterQueryParams queryParams;
    public SqlInstancesDemoteMasterRequest withQueryParams(SqlInstancesDemoteMasterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesDemoteMasterRequest request;
    public SqlInstancesDemoteMasterRequest withRequest(openapisdk.models.shared.InstancesDemoteMasterRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesDemoteMasterSecurity security;
    public SqlInstancesDemoteMasterRequest withSecurity(SqlInstancesDemoteMasterSecurity security) {
        this.security = security;
        return this;
    }
}