package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsVarianceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAssetsVarianceRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}