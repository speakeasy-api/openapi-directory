package openapisdk.models.operations;



public class FetchBindingRequest {
    public String serverURL;
    public FetchBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBindingPathParams pathParams;
    public FetchBindingRequest withPathParams(FetchBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBindingSecurity security;
    public FetchBindingRequest withSecurity(FetchBindingSecurity security) {
        this.security = security;
        return this;
    }
}