package openapisdk.models.operations;



public class FetchServiceUserRequest {
    public String serverURL;
    public FetchServiceUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceUserPathParams pathParams;
    public FetchServiceUserRequest withPathParams(FetchServiceUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceUserSecurity security;
    public FetchServiceUserRequest withSecurity(FetchServiceUserSecurity security) {
        this.security = security;
        return this;
    }
}