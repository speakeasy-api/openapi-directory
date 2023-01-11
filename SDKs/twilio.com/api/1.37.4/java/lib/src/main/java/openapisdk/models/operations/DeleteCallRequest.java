package openapisdk.models.operations;



public class DeleteCallRequest {
    public String serverURL;
    public DeleteCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCallPathParams pathParams;
    public DeleteCallRequest withPathParams(DeleteCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCallSecurity security;
    public DeleteCallRequest withSecurity(DeleteCallSecurity security) {
        this.security = security;
        return this;
    }
}