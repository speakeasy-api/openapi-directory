package openapisdk.models.operations;



public class DeleteFieldTypeRequest {
    public String serverURL;
    public DeleteFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFieldTypePathParams pathParams;
    public DeleteFieldTypeRequest withPathParams(DeleteFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFieldTypeSecurity security;
    public DeleteFieldTypeRequest withSecurity(DeleteFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}