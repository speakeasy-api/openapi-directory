package openapisdk.models.operations;



public class DeleteQueryRequest {
    public String serverURL;
    public DeleteQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteQueryPathParams pathParams;
    public DeleteQueryRequest withPathParams(DeleteQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteQuerySecurity security;
    public DeleteQueryRequest withSecurity(DeleteQuerySecurity security) {
        this.security = security;
        return this;
    }
}