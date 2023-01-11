package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSigningKeyRequest {
    public String serverURL;
    public UpdateSigningKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSigningKeyPathParams pathParams;
    public UpdateSigningKeyRequest withPathParams(UpdateSigningKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSigningKeyUpdateSigningKeyRequest request;
    public UpdateSigningKeyRequest withRequest(UpdateSigningKeyUpdateSigningKeyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSigningKeySecurity security;
    public UpdateSigningKeyRequest withSecurity(UpdateSigningKeySecurity security) {
        this.security = security;
        return this;
    }
}