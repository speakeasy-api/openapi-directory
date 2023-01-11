package openapisdk.models.operations;



public class DeleteQueueRequest {
    public String serverURL;
    public DeleteQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteQueuePathParams pathParams;
    public DeleteQueueRequest withPathParams(DeleteQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteQueueSecurity security;
    public DeleteQueueRequest withSecurity(DeleteQueueSecurity security) {
        this.security = security;
        return this;
    }
}