package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsVarianceSampleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsVarianceSampleRequestBody request;
    public PostAssetsVarianceSampleRequest withRequest(PostAssetsVarianceSampleRequestBody request) {
        this.request = request;
        return this;
    }
}