package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewKeyRequest {
    public String serverURL;
    public CreateNewKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateNewKeyPathParams pathParams;
    public CreateNewKeyRequest withPathParams(CreateNewKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNewKeyCreateNewKeyRequest request;
    public CreateNewKeyRequest withRequest(CreateNewKeyCreateNewKeyRequest request) {
        this.request = request;
        return this;
    }
    public CreateNewKeySecurity security;
    public CreateNewKeyRequest withSecurity(CreateNewKeySecurity security) {
        this.security = security;
        return this;
    }
}