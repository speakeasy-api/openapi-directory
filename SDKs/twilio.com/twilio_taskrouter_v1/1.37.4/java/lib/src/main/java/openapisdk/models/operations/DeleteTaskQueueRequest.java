package openapisdk.models.operations;



public class DeleteTaskQueueRequest {
    public String serverURL;
    public DeleteTaskQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTaskQueuePathParams pathParams;
    public DeleteTaskQueueRequest withPathParams(DeleteTaskQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTaskQueueSecurity security;
    public DeleteTaskQueueRequest withSecurity(DeleteTaskQueueSecurity security) {
        this.security = security;
        return this;
    }
}