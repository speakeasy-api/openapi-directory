package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductRequest {
    public String serverURL;
    public CreateTrustProductRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTrustProductCreateTrustProductRequest request;
    public CreateTrustProductRequest withRequest(CreateTrustProductCreateTrustProductRequest request) {
        this.request = request;
        return this;
    }
    public CreateTrustProductSecurity security;
    public CreateTrustProductRequest withSecurity(CreateTrustProductSecurity security) {
        this.security = security;
        return this;
    }
}