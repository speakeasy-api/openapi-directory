package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesInsertRequest {
    public SqlDatabasesInsertPathParams pathParams;
    public SqlDatabasesInsertRequest withPathParams(SqlDatabasesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlDatabasesInsertQueryParams queryParams;
    public SqlDatabasesInsertRequest withQueryParams(SqlDatabasesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Database request;
    public SqlDatabasesInsertRequest withRequest(openapisdk.models.shared.Database request) {
        this.request = request;
        return this;
    }
    public SqlDatabasesInsertSecurity security;
    public SqlDatabasesInsertRequest withSecurity(SqlDatabasesInsertSecurity security) {
        this.security = security;
        return this;
    }
}