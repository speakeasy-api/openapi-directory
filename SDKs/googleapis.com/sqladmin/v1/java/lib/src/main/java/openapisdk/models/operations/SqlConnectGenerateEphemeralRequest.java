package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlConnectGenerateEphemeralRequest {
    public SqlConnectGenerateEphemeralPathParams pathParams;
    public SqlConnectGenerateEphemeralRequest withPathParams(SqlConnectGenerateEphemeralPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlConnectGenerateEphemeralQueryParams queryParams;
    public SqlConnectGenerateEphemeralRequest withQueryParams(SqlConnectGenerateEphemeralQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateEphemeralCertRequest request;
    public SqlConnectGenerateEphemeralRequest withRequest(openapisdk.models.shared.GenerateEphemeralCertRequest request) {
        this.request = request;
        return this;
    }
    public SqlConnectGenerateEphemeralSecurity security;
    public SqlConnectGenerateEphemeralRequest withSecurity(SqlConnectGenerateEphemeralSecurity security) {
        this.security = security;
        return this;
    }
}