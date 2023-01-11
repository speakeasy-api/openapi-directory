package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesUpdateRequest {
    public SqlDatabasesUpdatePathParams pathParams;
    public SqlDatabasesUpdateRequest withPathParams(SqlDatabasesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlDatabasesUpdateQueryParams queryParams;
    public SqlDatabasesUpdateRequest withQueryParams(SqlDatabasesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Database request;
    public SqlDatabasesUpdateRequest withRequest(openapisdk.models.shared.Database request) {
        this.request = request;
        return this;
    }
    public SqlDatabasesUpdateSecurity security;
    public SqlDatabasesUpdateRequest withSecurity(SqlDatabasesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}