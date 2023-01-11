package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKeyOptions request;
    public CreateAccountKeyRequest withRequest(openapisdk.models.shared.ApiKeyOptions request) {
        this.request = request;
        return this;
    }
    public CreateAccountKeySecurity security;
    public CreateAccountKeyRequest withSecurity(CreateAccountKeySecurity security) {
        this.security = security;
        return this;
    }
}