package openapisdk.models.operations;



public class ApiKeyQuotasRequest {
    public ApiKeyQuotasPathParams pathParams;
    public ApiKeyQuotasRequest withPathParams(ApiKeyQuotasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeyQuotasSecurity security;
    public ApiKeyQuotasRequest withSecurity(ApiKeyQuotasSecurity security) {
        this.security = security;
        return this;
    }
}