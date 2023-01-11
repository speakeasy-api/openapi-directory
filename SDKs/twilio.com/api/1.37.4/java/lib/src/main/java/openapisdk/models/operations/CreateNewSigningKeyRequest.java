package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewSigningKeyRequest {
    public String serverURL;
    public CreateNewSigningKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateNewSigningKeyPathParams pathParams;
    public CreateNewSigningKeyRequest withPathParams(CreateNewSigningKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNewSigningKeyCreateNewSigningKeyRequest request;
    public CreateNewSigningKeyRequest withRequest(CreateNewSigningKeyCreateNewSigningKeyRequest request) {
        this.request = request;
        return this;
    }
    public CreateNewSigningKeySecurity security;
    public CreateNewSigningKeyRequest withSecurity(CreateNewSigningKeySecurity security) {
        this.security = security;
        return this;
    }
}