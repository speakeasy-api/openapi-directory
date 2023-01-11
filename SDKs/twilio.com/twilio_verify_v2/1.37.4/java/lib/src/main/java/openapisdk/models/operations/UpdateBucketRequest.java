package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBucketRequest {
    public String serverURL;
    public UpdateBucketRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateBucketPathParams pathParams;
    public UpdateBucketRequest withPathParams(UpdateBucketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateBucketUpdateBucketRequest request;
    public UpdateBucketRequest withRequest(UpdateBucketUpdateBucketRequest request) {
        this.request = request;
        return this;
    }
    public UpdateBucketSecurity security;
    public UpdateBucketRequest withSecurity(UpdateBucketSecurity security) {
        this.security = security;
        return this;
    }
}