package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountCredentialRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CredentialOptions request;
    public CreateAccountCredentialRequest withRequest(openapisdk.models.shared.CredentialOptions request) {
        this.request = request;
        return this;
    }
    public CreateAccountCredentialSecurity security;
    public CreateAccountCredentialRequest withSecurity(CreateAccountCredentialSecurity security) {
        this.security = security;
        return this;
    }
}