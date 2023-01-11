package openapisdk.models.operations;



public class FetchUserRequest {
    public String serverURL;
    public FetchUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserPathParams pathParams;
    public FetchUserRequest withPathParams(FetchUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUserSecurity security;
    public FetchUserRequest withSecurity(FetchUserSecurity security) {
        this.security = security;
        return this;
    }
}