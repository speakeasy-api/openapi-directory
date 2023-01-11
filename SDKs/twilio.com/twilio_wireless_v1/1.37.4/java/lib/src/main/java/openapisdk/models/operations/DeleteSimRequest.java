package openapisdk.models.operations;



public class DeleteSimRequest {
    public String serverURL;
    public DeleteSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSimPathParams pathParams;
    public DeleteSimRequest withPathParams(DeleteSimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSimSecurity security;
    public DeleteSimRequest withSecurity(DeleteSimSecurity security) {
        this.security = security;
        return this;
    }
}