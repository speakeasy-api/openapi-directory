package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialRequest {
    public String serverURL;
    public CreateSipCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipCredentialPathParams pathParams;
    public CreateSipCredentialRequest withPathParams(CreateSipCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipCredentialCreateSipCredentialRequest request;
    public CreateSipCredentialRequest withRequest(CreateSipCredentialCreateSipCredentialRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipCredentialSecurity security;
    public CreateSipCredentialRequest withSecurity(CreateSipCredentialSecurity security) {
        this.security = security;
        return this;
    }
}