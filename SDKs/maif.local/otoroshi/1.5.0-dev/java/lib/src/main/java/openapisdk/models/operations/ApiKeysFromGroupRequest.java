package openapisdk.models.operations;



public class ApiKeysFromGroupRequest {
    public ApiKeysFromGroupPathParams pathParams;
    public ApiKeysFromGroupRequest withPathParams(ApiKeysFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApiKeysFromGroupSecurity security;
    public ApiKeysFromGroupRequest withSecurity(ApiKeysFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}