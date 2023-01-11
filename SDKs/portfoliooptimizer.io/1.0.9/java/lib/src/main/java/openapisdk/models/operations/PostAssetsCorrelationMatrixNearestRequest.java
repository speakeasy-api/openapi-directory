package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCorrelationMatrixNearestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsCorrelationMatrixNearestRequestBody request;
    public PostAssetsCorrelationMatrixNearestRequest withRequest(PostAssetsCorrelationMatrixNearestRequestBody request) {
        this.request = request;
        return this;
    }
}