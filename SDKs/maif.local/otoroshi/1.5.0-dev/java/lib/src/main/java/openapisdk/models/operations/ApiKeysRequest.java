package openapisdk.models.operations;



public class ApiKeysRequest {
    public ApiKeysPathParams pathParams;
    public ApiKeysRequest withPathParams(ApiKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeysSecurity security;
    public ApiKeysRequest withSecurity(ApiKeysSecurity security) {
        this.security = security;
        return this;
    }
}