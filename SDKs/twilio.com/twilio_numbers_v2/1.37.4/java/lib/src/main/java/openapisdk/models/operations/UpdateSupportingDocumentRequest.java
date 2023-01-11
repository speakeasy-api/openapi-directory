package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSupportingDocumentRequest {
    public String serverURL;
    public UpdateSupportingDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSupportingDocumentPathParams pathParams;
    public UpdateSupportingDocumentRequest withPathParams(UpdateSupportingDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSupportingDocumentUpdateSupportingDocumentRequest request;
    public UpdateSupportingDocumentRequest withRequest(UpdateSupportingDocumentUpdateSupportingDocumentRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSupportingDocumentSecurity security;
    public UpdateSupportingDocumentRequest withSecurity(UpdateSupportingDocumentSecurity security) {
        this.security = security;
        return this;
    }
}