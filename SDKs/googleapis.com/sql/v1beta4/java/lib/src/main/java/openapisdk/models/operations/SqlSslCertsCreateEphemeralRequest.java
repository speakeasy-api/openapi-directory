package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsCreateEphemeralRequest {
    public SqlSslCertsCreateEphemeralPathParams pathParams;
    public SqlSslCertsCreateEphemeralRequest withPathParams(SqlSslCertsCreateEphemeralPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlSslCertsCreateEphemeralQueryParams queryParams;
    public SqlSslCertsCreateEphemeralRequest withQueryParams(SqlSslCertsCreateEphemeralQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SslCertsCreateEphemeralRequest request;
    public SqlSslCertsCreateEphemeralRequest withRequest(openapisdk.models.shared.SslCertsCreateEphemeralRequest request) {
        this.request = request;
        return this;
    }
    public SqlSslCertsCreateEphemeralSecurity security;
    public SqlSslCertsCreateEphemeralRequest withSecurity(SqlSslCertsCreateEphemeralSecurity security) {
        this.security = security;
        return this;
    }
}