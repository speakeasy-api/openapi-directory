package openapisdk.models.operations;



public class FetchFunctionVersionContentRequest {
    public String serverURL;
    public FetchFunctionVersionContentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFunctionVersionContentPathParams pathParams;
    public FetchFunctionVersionContentRequest withPathParams(FetchFunctionVersionContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFunctionVersionContentSecurity security;
    public FetchFunctionVersionContentRequest withSecurity(FetchFunctionVersionContentSecurity security) {
        this.security = security;
        return this;
    }
}