package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentRequest {
    public String serverURL;
    public CreateDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDocumentPathParams pathParams;
    public CreateDocumentRequest withPathParams(CreateDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDocumentCreateDocumentRequest request;
    public CreateDocumentRequest withRequest(CreateDocumentCreateDocumentRequest request) {
        this.request = request;
        return this;
    }
    public CreateDocumentSecurity security;
    public CreateDocumentRequest withSecurity(CreateDocumentSecurity security) {
        this.security = security;
        return this;
    }
}