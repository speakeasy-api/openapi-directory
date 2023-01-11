package openapisdk.models.operations;



public class FetchFunctionVersionRequest {
    public String serverURL;
    public FetchFunctionVersionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFunctionVersionPathParams pathParams;
    public FetchFunctionVersionRequest withPathParams(FetchFunctionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFunctionVersionSecurity security;
    public FetchFunctionVersionRequest withSecurity(FetchFunctionVersionSecurity security) {
        this.security = security;
        return this;
    }
}