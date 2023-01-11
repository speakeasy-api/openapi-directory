package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCorrelationMatrixRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAssetsCorrelationMatrixRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}