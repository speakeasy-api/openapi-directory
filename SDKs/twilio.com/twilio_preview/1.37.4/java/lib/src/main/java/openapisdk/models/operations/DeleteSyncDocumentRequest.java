package openapisdk.models.operations;



public class DeleteSyncDocumentRequest {
    public String serverURL;
    public DeleteSyncDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncDocumentPathParams pathParams;
    public DeleteSyncDocumentRequest withPathParams(DeleteSyncDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncDocumentSecurity security;
    public DeleteSyncDocumentRequest withSecurity(DeleteSyncDocumentSecurity security) {
        this.security = security;
        return this;
    }
}