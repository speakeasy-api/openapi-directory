package openapisdk.models.operations;



public class DeleteAppRequest {
    public String serverURL;
    public DeleteAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteAppPathParams pathParams;
    public DeleteAppRequest withPathParams(DeleteAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAppSecurity security;
    public DeleteAppRequest withSecurity(DeleteAppSecurity security) {
        this.security = security;
        return this;
    }
}