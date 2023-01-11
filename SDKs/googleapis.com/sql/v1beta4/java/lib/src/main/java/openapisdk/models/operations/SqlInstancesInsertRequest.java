package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesInsertRequest {
    public SqlInstancesInsertPathParams pathParams;
    public SqlInstancesInsertRequest withPathParams(SqlInstancesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesInsertQueryParams queryParams;
    public SqlInstancesInsertRequest withQueryParams(SqlInstancesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatabaseInstanceInput request;
    public SqlInstancesInsertRequest withRequest(openapisdk.models.shared.DatabaseInstanceInput request) {
        this.request = request;
        return this;
    }
    public SqlInstancesInsertSecurity security;
    public SqlInstancesInsertRequest withSecurity(SqlInstancesInsertSecurity security) {
        this.security = security;
        return this;
    }
}