package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBundleCopyRequest {
    public String serverURL;
    public CreateBundleCopyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateBundleCopyPathParams pathParams;
    public CreateBundleCopyRequest withPathParams(CreateBundleCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBundleCopyCreateBundleCopyRequest request;
    public CreateBundleCopyRequest withRequest(CreateBundleCopyCreateBundleCopyRequest request) {
        this.request = request;
        return this;
    }
    public CreateBundleCopySecurity security;
    public CreateBundleCopyRequest withSecurity(CreateBundleCopySecurity security) {
        this.security = security;
        return this;
    }
}