package openapisdk.models.operations;



public class FetchFunctionRequest {
    public String serverURL;
    public FetchFunctionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFunctionPathParams pathParams;
    public FetchFunctionRequest withPathParams(FetchFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFunctionSecurity security;
    public FetchFunctionRequest withSecurity(FetchFunctionSecurity security) {
        this.security = security;
        return this;
    }
}