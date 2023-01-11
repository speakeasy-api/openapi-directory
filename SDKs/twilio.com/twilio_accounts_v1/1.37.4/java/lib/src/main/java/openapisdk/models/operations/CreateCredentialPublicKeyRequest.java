package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialPublicKeyRequest {
    public String serverURL;
    public CreateCredentialPublicKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCredentialPublicKeyCreateCredentialPublicKeyRequest request;
    public CreateCredentialPublicKeyRequest withRequest(CreateCredentialPublicKeyCreateCredentialPublicKeyRequest request) {
        this.request = request;
        return this;
    }
    public CreateCredentialPublicKeySecurity security;
    public CreateCredentialPublicKeyRequest withSecurity(CreateCredentialPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}