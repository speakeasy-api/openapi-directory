package openapisdk.models.operations;



public class DeleteFactorRequest {
    public String serverURL;
    public DeleteFactorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFactorPathParams pathParams;
    public DeleteFactorRequest withPathParams(DeleteFactorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFactorSecurity security;
    public DeleteFactorRequest withSecurity(DeleteFactorSecurity security) {
        this.security = security;
        return this;
    }
}