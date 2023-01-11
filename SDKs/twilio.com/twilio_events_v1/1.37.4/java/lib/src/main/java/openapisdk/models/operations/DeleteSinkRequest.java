package openapisdk.models.operations;



public class DeleteSinkRequest {
    public String serverURL;
    public DeleteSinkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSinkPathParams pathParams;
    public DeleteSinkRequest withPathParams(DeleteSinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSinkSecurity security;
    public DeleteSinkRequest withSecurity(DeleteSinkSecurity security) {
        this.security = security;
        return this;
    }
}