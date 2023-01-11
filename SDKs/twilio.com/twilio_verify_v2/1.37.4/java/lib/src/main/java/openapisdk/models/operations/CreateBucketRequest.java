package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBucketRequest {
    public String serverURL;
    public CreateBucketRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateBucketPathParams pathParams;
    public CreateBucketRequest withPathParams(CreateBucketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBucketCreateBucketRequest request;
    public CreateBucketRequest withRequest(CreateBucketCreateBucketRequest request) {
        this.request = request;
        return this;
    }
    public CreateBucketSecurity security;
    public CreateBucketRequest withSecurity(CreateBucketSecurity security) {
        this.security = security;
        return this;
    }
}