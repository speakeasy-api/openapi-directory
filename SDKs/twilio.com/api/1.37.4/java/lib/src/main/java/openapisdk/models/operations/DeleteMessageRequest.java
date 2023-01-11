package openapisdk.models.operations;



public class DeleteMessageRequest {
    public String serverURL;
    public DeleteMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMessagePathParams pathParams;
    public DeleteMessageRequest withPathParams(DeleteMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMessageSecurity security;
    public DeleteMessageRequest withSecurity(DeleteMessageSecurity security) {
        this.security = security;
        return this;
    }
}