package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialPublicKeyRequest {
    public String serverURL;
    public UpdateCredentialPublicKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCredentialPublicKeyPathParams pathParams;
    public UpdateCredentialPublicKeyRequest withPathParams(UpdateCredentialPublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest request;
    public UpdateCredentialPublicKeyRequest withRequest(UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCredentialPublicKeySecurity security;
    public UpdateCredentialPublicKeyRequest withSecurity(UpdateCredentialPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}