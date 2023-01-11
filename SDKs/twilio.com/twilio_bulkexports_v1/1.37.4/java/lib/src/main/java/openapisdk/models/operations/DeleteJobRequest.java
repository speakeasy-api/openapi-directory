package openapisdk.models.operations;



public class DeleteJobRequest {
    public String serverURL;
    public DeleteJobRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteJobPathParams pathParams;
    public DeleteJobRequest withPathParams(DeleteJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteJobSecurity security;
    public DeleteJobRequest withSecurity(DeleteJobSecurity security) {
        this.security = security;
        return this;
    }
}