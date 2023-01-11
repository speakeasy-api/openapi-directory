package openapisdk.models.operations;



public class FetchFieldRequest {
    public String serverURL;
    public FetchFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFieldPathParams pathParams;
    public FetchFieldRequest withPathParams(FetchFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFieldSecurity security;
    public FetchFieldRequest withSecurity(FetchFieldSecurity security) {
        this.security = security;
        return this;
    }
}