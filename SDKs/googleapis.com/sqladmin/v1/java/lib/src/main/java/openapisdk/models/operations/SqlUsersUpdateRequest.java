package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersUpdateRequest {
    public SqlUsersUpdatePathParams pathParams;
    public SqlUsersUpdateRequest withPathParams(SqlUsersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlUsersUpdateQueryParams queryParams;
    public SqlUsersUpdateRequest withQueryParams(SqlUsersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.User request;
    public SqlUsersUpdateRequest withRequest(openapisdk.models.shared.User request) {
        this.request = request;
        return this;
    }
    public SqlUsersUpdateSecurity security;
    public SqlUsersUpdateRequest withSecurity(SqlUsersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}