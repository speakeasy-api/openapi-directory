package openapisdk.models.operations;



public class DeleteSupportingDocumentRequest {
    public String serverURL;
    public DeleteSupportingDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSupportingDocumentPathParams pathParams;
    public DeleteSupportingDocumentRequest withPathParams(DeleteSupportingDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSupportingDocumentSecurity security;
    public DeleteSupportingDocumentRequest withSecurity(DeleteSupportingDocumentSecurity security) {
        this.security = security;
        return this;
    }
}