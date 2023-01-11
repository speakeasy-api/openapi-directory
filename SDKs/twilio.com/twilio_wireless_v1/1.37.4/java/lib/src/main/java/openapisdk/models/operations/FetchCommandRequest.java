package openapisdk.models.operations;



public class FetchCommandRequest {
    public String serverURL;
    public FetchCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCommandPathParams pathParams;
    public FetchCommandRequest withPathParams(FetchCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCommandSecurity security;
    public FetchCommandRequest withSecurity(FetchCommandSecurity security) {
        this.security = security;
        return this;
    }
}