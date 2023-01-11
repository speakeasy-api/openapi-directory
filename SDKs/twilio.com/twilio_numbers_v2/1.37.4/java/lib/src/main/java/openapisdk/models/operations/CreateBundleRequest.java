package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBundleRequest {
    public String serverURL;
    public CreateBundleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBundleCreateBundleRequest request;
    public CreateBundleRequest withRequest(CreateBundleCreateBundleRequest request) {
        this.request = request;
        return this;
    }
    public CreateBundleSecurity security;
    public CreateBundleRequest withSecurity(CreateBundleSecurity security) {
        this.security = security;
        return this;
    }
}