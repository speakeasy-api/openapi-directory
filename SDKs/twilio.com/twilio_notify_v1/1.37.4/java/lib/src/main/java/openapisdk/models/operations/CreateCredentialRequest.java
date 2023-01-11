package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialRequest {
    public String serverURL;
    public CreateCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCredentialCreateCredentialRequest request;
    public CreateCredentialRequest withRequest(CreateCredentialCreateCredentialRequest request) {
        this.request = request;
        return this;
    }
    public CreateCredentialSecurity security;
    public CreateCredentialRequest withSecurity(CreateCredentialSecurity security) {
        this.security = security;
        return this;
    }
}