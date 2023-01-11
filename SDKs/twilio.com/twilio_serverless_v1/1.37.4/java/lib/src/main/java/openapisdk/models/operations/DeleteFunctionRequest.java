package openapisdk.models.operations;



public class DeleteFunctionRequest {
    public String serverURL;
    public DeleteFunctionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFunctionPathParams pathParams;
    public DeleteFunctionRequest withPathParams(DeleteFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFunctionSecurity security;
    public DeleteFunctionRequest withSecurity(DeleteFunctionSecurity security) {
        this.security = security;
        return this;
    }
}