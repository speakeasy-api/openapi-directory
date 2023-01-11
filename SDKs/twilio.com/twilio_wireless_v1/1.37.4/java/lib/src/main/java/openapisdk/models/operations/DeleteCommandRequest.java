package openapisdk.models.operations;



public class DeleteCommandRequest {
    public String serverURL;
    public DeleteCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCommandPathParams pathParams;
    public DeleteCommandRequest withPathParams(DeleteCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCommandSecurity security;
    public DeleteCommandRequest withSecurity(DeleteCommandSecurity security) {
        this.security = security;
        return this;
    }
}