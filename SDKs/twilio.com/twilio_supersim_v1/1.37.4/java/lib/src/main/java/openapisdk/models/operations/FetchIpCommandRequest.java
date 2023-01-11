package openapisdk.models.operations;



public class FetchIpCommandRequest {
    public String serverURL;
    public FetchIpCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIpCommandPathParams pathParams;
    public FetchIpCommandRequest withPathParams(FetchIpCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIpCommandSecurity security;
    public FetchIpCommandRequest withSecurity(FetchIpCommandSecurity security) {
        this.security = security;
        return this;
    }
}