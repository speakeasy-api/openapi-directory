package openapisdk.models.operations;



public class FetchSyncDocumentRequest {
    public String serverURL;
    public FetchSyncDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncDocumentPathParams pathParams;
    public FetchSyncDocumentRequest withPathParams(FetchSyncDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncDocumentSecurity security;
    public FetchSyncDocumentRequest withSecurity(FetchSyncDocumentSecurity security) {
        this.security = security;
        return this;
    }
}