package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSupportingDocumentRequest {
    public String serverURL;
    public CreateSupportingDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSupportingDocumentCreateSupportingDocumentRequest request;
    public CreateSupportingDocumentRequest withRequest(CreateSupportingDocumentCreateSupportingDocumentRequest request) {
        this.request = request;
        return this;
    }
    public CreateSupportingDocumentSecurity security;
    public CreateSupportingDocumentRequest withSecurity(CreateSupportingDocumentSecurity security) {
        this.security = security;
        return this;
    }
}