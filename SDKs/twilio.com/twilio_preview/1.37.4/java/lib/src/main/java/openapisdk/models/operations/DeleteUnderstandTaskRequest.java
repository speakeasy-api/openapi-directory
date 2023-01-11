package openapisdk.models.operations;



public class DeleteUnderstandTaskRequest {
    public String serverURL;
    public DeleteUnderstandTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandTaskPathParams pathParams;
    public DeleteUnderstandTaskRequest withPathParams(DeleteUnderstandTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandTaskSecurity security;
    public DeleteUnderstandTaskRequest withSecurity(DeleteUnderstandTaskSecurity security) {
        this.security = security;
        return this;
    }
}