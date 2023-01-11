package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncDocumentRequest {
    public String serverURL;
    public CreateSyncDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncDocumentPathParams pathParams;
    public CreateSyncDocumentRequest withPathParams(CreateSyncDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncDocumentCreateSyncDocumentRequest request;
    public CreateSyncDocumentRequest withRequest(CreateSyncDocumentCreateSyncDocumentRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncDocumentSecurity security;
    public CreateSyncDocumentRequest withSecurity(CreateSyncDocumentSecurity security) {
        this.security = security;
        return this;
    }
}