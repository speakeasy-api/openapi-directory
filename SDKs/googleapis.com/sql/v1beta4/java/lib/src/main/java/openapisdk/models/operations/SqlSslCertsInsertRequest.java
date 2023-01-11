package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsInsertRequest {
    public SqlSslCertsInsertPathParams pathParams;
    public SqlSslCertsInsertRequest withPathParams(SqlSslCertsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlSslCertsInsertQueryParams queryParams;
    public SqlSslCertsInsertRequest withQueryParams(SqlSslCertsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SslCertsInsertRequest request;
    public SqlSslCertsInsertRequest withRequest(openapisdk.models.shared.SslCertsInsertRequest request) {
        this.request = request;
        return this;
    }
    public SqlSslCertsInsertSecurity security;
    public SqlSslCertsInsertRequest withSecurity(SqlSslCertsInsertSecurity security) {
        this.security = security;
        return this;
    }
}