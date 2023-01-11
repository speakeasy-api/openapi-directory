package openapisdk.models.operations;



public class ResetApiKeyQuotasRequest {
    public ResetApiKeyQuotasPathParams pathParams;
    public ResetApiKeyQuotasRequest withPathParams(ResetApiKeyQuotasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetApiKeyQuotasSecurity security;
    public ResetApiKeyQuotasRequest withSecurity(ResetApiKeyQuotasSecurity security) {
        this.security = security;
        return this;
    }
}