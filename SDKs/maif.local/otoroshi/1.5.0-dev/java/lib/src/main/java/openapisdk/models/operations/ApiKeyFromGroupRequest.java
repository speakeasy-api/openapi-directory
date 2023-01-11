package openapisdk.models.operations;



public class ApiKeyFromGroupRequest {
    public ApiKeyFromGroupPathParams pathParams;
    public ApiKeyFromGroupRequest withPathParams(ApiKeyFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeyFromGroupSecurity security;
    public ApiKeyFromGroupRequest withSecurity(ApiKeyFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}