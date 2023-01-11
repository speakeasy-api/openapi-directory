package openapisdk.models.operations;



public class DeleteUnderstandQueryRequest {
    public String serverURL;
    public DeleteUnderstandQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandQueryPathParams pathParams;
    public DeleteUnderstandQueryRequest withPathParams(DeleteUnderstandQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandQuerySecurity security;
    public DeleteUnderstandQueryRequest withSecurity(DeleteUnderstandQuerySecurity security) {
        this.security = security;
        return this;
    }
}