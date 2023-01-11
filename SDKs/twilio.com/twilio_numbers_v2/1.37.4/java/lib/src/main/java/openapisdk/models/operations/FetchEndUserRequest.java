package openapisdk.models.operations;



public class FetchEndUserRequest {
    public String serverURL;
    public FetchEndUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEndUserPathParams pathParams;
    public FetchEndUserRequest withPathParams(FetchEndUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEndUserSecurity security;
    public FetchEndUserRequest withSecurity(FetchEndUserSecurity security) {
        this.security = security;
        return this;
    }
}