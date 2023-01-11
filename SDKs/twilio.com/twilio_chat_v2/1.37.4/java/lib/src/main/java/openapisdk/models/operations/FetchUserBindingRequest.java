package openapisdk.models.operations;



public class FetchUserBindingRequest {
    public String serverURL;
    public FetchUserBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserBindingPathParams pathParams;
    public FetchUserBindingRequest withPathParams(FetchUserBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUserBindingSecurity security;
    public FetchUserBindingRequest withSecurity(FetchUserBindingSecurity security) {
        this.security = security;
        return this;
    }
}