package openapisdk.models.operations;



public class ApiKeyGroupRequest {
    public ApiKeyGroupPathParams pathParams;
    public ApiKeyGroupRequest withPathParams(ApiKeyGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeyGroupSecurity security;
    public ApiKeyGroupRequest withSecurity(ApiKeyGroupSecurity security) {
        this.security = security;
        return this;
    }
}