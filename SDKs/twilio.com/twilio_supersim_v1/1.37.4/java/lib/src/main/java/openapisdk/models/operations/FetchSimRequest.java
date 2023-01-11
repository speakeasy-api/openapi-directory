package openapisdk.models.operations;



public class FetchSimRequest {
    public String serverURL;
    public FetchSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSimPathParams pathParams;
    public FetchSimRequest withPathParams(FetchSimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSimSecurity security;
    public FetchSimRequest withSecurity(FetchSimSecurity security) {
        this.security = security;
        return this;
    }
}