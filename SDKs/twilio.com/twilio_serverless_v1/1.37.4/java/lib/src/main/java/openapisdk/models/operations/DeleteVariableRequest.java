package openapisdk.models.operations;



public class DeleteVariableRequest {
    public String serverURL;
    public DeleteVariableRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteVariablePathParams pathParams;
    public DeleteVariableRequest withPathParams(DeleteVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVariableSecurity security;
    public DeleteVariableRequest withSecurity(DeleteVariableSecurity security) {
        this.security = security;
        return this;
    }
}