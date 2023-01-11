package openapisdk.models.operations;



public class DeleteSafelistRequest {
    public String serverURL;
    public DeleteSafelistRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSafelistPathParams pathParams;
    public DeleteSafelistRequest withPathParams(DeleteSafelistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSafelistSecurity security;
    public DeleteSafelistRequest withSecurity(DeleteSafelistSecurity security) {
        this.security = security;
        return this;
    }
}