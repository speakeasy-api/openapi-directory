package openapisdk.models.operations;



public class FetchServiceBindingRequest {
    public String serverURL;
    public FetchServiceBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceBindingPathParams pathParams;
    public FetchServiceBindingRequest withPathParams(FetchServiceBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceBindingSecurity security;
    public FetchServiceBindingRequest withSecurity(FetchServiceBindingSecurity security) {
        this.security = security;
        return this;
    }
}