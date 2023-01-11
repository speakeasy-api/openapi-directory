package openapisdk.models.operations;



public class DeleteTaskRequest {
    public String serverURL;
    public DeleteTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTaskPathParams pathParams;
    public DeleteTaskRequest withPathParams(DeleteTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTaskSecurity security;
    public DeleteTaskRequest withSecurity(DeleteTaskSecurity security) {
        this.security = security;
        return this;
    }
}