package openapisdk.models.operations;



public class FetchFaxRequest {
    public String serverURL;
    public FetchFaxRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFaxPathParams pathParams;
    public FetchFaxRequest withPathParams(FetchFaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFaxSecurity security;
    public FetchFaxRequest withSecurity(FetchFaxSecurity security) {
        this.security = security;
        return this;
    }
}