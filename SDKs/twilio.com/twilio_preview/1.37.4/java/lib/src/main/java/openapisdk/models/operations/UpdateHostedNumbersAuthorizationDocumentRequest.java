package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersAuthorizationDocumentRequest {
    public String serverURL;
    public UpdateHostedNumbersAuthorizationDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateHostedNumbersAuthorizationDocumentPathParams pathParams;
    public UpdateHostedNumbersAuthorizationDocumentRequest withPathParams(UpdateHostedNumbersAuthorizationDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest request;
    public UpdateHostedNumbersAuthorizationDocumentRequest withRequest(UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest request) {
        this.request = request;
        return this;
    }
    public UpdateHostedNumbersAuthorizationDocumentSecurity security;
    public UpdateHostedNumbersAuthorizationDocumentRequest withSecurity(UpdateHostedNumbersAuthorizationDocumentSecurity security) {
        this.security = security;
        return this;
    }
}