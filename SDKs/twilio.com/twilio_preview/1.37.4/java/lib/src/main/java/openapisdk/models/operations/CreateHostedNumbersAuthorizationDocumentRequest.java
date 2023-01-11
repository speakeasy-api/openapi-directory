package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHostedNumbersAuthorizationDocumentRequest {
    public String serverURL;
    public CreateHostedNumbersAuthorizationDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest request;
    public CreateHostedNumbersAuthorizationDocumentRequest withRequest(CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest request) {
        this.request = request;
        return this;
    }
    public CreateHostedNumbersAuthorizationDocumentSecurity security;
    public CreateHostedNumbersAuthorizationDocumentRequest withSecurity(CreateHostedNumbersAuthorizationDocumentSecurity security) {
        this.security = security;
        return this;
    }
}