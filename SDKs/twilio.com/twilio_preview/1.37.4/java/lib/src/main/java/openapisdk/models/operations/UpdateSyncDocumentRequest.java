package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncDocumentRequest {
    public String serverURL;
    public UpdateSyncDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncDocumentPathParams pathParams;
    public UpdateSyncDocumentRequest withPathParams(UpdateSyncDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSyncDocumentHeaders headers;
    public UpdateSyncDocumentRequest withHeaders(UpdateSyncDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncDocumentUpdateSyncDocumentRequest request;
    public UpdateSyncDocumentRequest withRequest(UpdateSyncDocumentUpdateSyncDocumentRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncDocumentSecurity security;
    public UpdateSyncDocumentRequest withSecurity(UpdateSyncDocumentSecurity security) {
        this.security = security;
        return this;
    }
}