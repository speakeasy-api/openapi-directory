package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBundleRequest {
    public String serverURL;
    public UpdateBundleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateBundlePathParams pathParams;
    public UpdateBundleRequest withPathParams(UpdateBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateBundleUpdateBundleRequest request;
    public UpdateBundleRequest withRequest(UpdateBundleUpdateBundleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateBundleSecurity security;
    public UpdateBundleRequest withSecurity(UpdateBundleSecurity security) {
        this.security = security;
        return this;
    }
}