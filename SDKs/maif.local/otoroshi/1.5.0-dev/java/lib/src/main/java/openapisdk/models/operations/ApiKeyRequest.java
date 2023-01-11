package openapisdk.models.operations;



public class ApiKeyRequest {
    public ApiKeyPathParams pathParams;
    public ApiKeyRequest withPathParams(ApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeySecurity security;
    public ApiKeyRequest withSecurity(ApiKeySecurity security) {
        this.security = security;
        return this;
    }
}