package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersInsertRequest {
    public SqlUsersInsertPathParams pathParams;
    public SqlUsersInsertRequest withPathParams(SqlUsersInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlUsersInsertQueryParams queryParams;
    public SqlUsersInsertRequest withQueryParams(SqlUsersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.User request;
    public SqlUsersInsertRequest withRequest(openapisdk.models.shared.User request) {
        this.request = request;
        return this;
    }
    public SqlUsersInsertSecurity security;
    public SqlUsersInsertRequest withSecurity(SqlUsersInsertSecurity security) {
        this.security = security;
        return this;
    }
}