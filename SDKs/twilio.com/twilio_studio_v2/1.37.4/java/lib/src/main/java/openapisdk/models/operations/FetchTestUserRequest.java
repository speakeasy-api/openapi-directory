package openapisdk.models.operations;



public class FetchTestUserRequest {
    public String serverURL;
    public FetchTestUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTestUserPathParams pathParams;
    public FetchTestUserRequest withPathParams(FetchTestUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTestUserSecurity security;
    public FetchTestUserRequest withSecurity(FetchTestUserSecurity security) {
        this.security = security;
        return this;
    }
}