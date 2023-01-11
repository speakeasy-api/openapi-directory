package openapisdk.models.operations;



public class DeleteEntityRequest {
    public String serverURL;
    public DeleteEntityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteEntityPathParams pathParams;
    public DeleteEntityRequest withPathParams(DeleteEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEntitySecurity security;
    public DeleteEntityRequest withSecurity(DeleteEntitySecurity security) {
        this.security = security;
        return this;
    }
}