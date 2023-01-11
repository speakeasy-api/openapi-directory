package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDocumentRequest {
    public String serverURL;
    public UpdateDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDocumentPathParams pathParams;
    public UpdateDocumentRequest withPathParams(UpdateDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDocumentHeaders headers;
    public UpdateDocumentRequest withHeaders(UpdateDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDocumentUpdateDocumentRequest request;
    public UpdateDocumentRequest withRequest(UpdateDocumentUpdateDocumentRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDocumentSecurity security;
    public UpdateDocumentRequest withSecurity(UpdateDocumentSecurity security) {
        this.security = security;
        return this;
    }
}