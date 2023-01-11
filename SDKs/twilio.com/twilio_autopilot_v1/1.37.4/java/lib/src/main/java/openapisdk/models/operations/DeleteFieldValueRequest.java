package openapisdk.models.operations;



public class DeleteFieldValueRequest {
    public String serverURL;
    public DeleteFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFieldValuePathParams pathParams;
    public DeleteFieldValueRequest withPathParams(DeleteFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFieldValueSecurity security;
    public DeleteFieldValueRequest withSecurity(DeleteFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}