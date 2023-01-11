package openapisdk.models.operations;



public class DeleteConnectAppRequest {
    public String serverURL;
    public DeleteConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConnectAppPathParams pathParams;
    public DeleteConnectAppRequest withPathParams(DeleteConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConnectAppSecurity security;
    public DeleteConnectAppRequest withSecurity(DeleteConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}