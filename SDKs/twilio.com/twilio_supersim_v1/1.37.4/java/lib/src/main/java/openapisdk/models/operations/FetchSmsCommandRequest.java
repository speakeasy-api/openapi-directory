package openapisdk.models.operations;



public class FetchSmsCommandRequest {
    public String serverURL;
    public FetchSmsCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSmsCommandPathParams pathParams;
    public FetchSmsCommandRequest withPathParams(FetchSmsCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSmsCommandSecurity security;
    public FetchSmsCommandRequest withSecurity(FetchSmsCommandSecurity security) {
        this.security = security;
        return this;
    }
}