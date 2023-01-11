package openapisdk.models.operations;



public class DeleteExecutionRequest {
    public String serverURL;
    public DeleteExecutionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteExecutionPathParams pathParams;
    public DeleteExecutionRequest withPathParams(DeleteExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteExecutionSecurity security;
    public DeleteExecutionRequest withSecurity(DeleteExecutionSecurity security) {
        this.security = security;
        return this;
    }
}