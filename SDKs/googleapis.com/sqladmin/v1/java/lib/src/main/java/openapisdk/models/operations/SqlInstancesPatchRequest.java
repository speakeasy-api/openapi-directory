package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesPatchRequest {
    public SqlInstancesPatchPathParams pathParams;
    public SqlInstancesPatchRequest withPathParams(SqlInstancesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesPatchQueryParams queryParams;
    public SqlInstancesPatchRequest withQueryParams(SqlInstancesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatabaseInstanceInput request;
    public SqlInstancesPatchRequest withRequest(openapisdk.models.shared.DatabaseInstanceInput request) {
        this.request = request;
        return this;
    }
    public SqlInstancesPatchSecurity security;
    public SqlInstancesPatchRequest withSecurity(SqlInstancesPatchSecurity security) {
        this.security = security;
        return this;
    }
}