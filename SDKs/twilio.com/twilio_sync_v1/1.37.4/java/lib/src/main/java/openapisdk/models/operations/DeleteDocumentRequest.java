package openapisdk.models.operations;



public class DeleteDocumentRequest {
    public String serverURL;
    public DeleteDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDocumentPathParams pathParams;
    public DeleteDocumentRequest withPathParams(DeleteDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDocumentSecurity security;
    public DeleteDocumentRequest withSecurity(DeleteDocumentSecurity security) {
        this.security = security;
        return this;
    }
}