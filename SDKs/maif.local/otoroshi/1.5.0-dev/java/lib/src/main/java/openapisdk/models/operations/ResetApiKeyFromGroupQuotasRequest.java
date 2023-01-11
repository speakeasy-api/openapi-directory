package openapisdk.models.operations;



public class ResetApiKeyFromGroupQuotasRequest {
    public ResetApiKeyFromGroupQuotasPathParams pathParams;
    public ResetApiKeyFromGroupQuotasRequest withPathParams(ResetApiKeyFromGroupQuotasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetApiKeyFromGroupQuotasSecurity security;
    public ResetApiKeyFromGroupQuotasRequest withSecurity(ResetApiKeyFromGroupQuotasSecurity security) {
        this.security = security;
        return this;
    }
}