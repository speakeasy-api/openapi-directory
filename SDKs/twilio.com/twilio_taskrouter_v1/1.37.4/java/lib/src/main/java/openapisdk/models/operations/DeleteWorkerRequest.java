package openapisdk.models.operations;



public class DeleteWorkerRequest {
    public String serverURL;
    public DeleteWorkerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWorkerPathParams pathParams;
    public DeleteWorkerRequest withPathParams(DeleteWorkerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkerHeaders headers;
    public DeleteWorkerRequest withHeaders(DeleteWorkerHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteWorkerSecurity security;
    public DeleteWorkerRequest withSecurity(DeleteWorkerSecurity security) {
        this.security = security;
        return this;
    }
}