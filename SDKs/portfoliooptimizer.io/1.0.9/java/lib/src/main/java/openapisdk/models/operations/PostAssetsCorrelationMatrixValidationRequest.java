package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCorrelationMatrixValidationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsCorrelationMatrixValidationRequestBody request;
    public PostAssetsCorrelationMatrixValidationRequest withRequest(PostAssetsCorrelationMatrixValidationRequestBody request) {
        this.request = request;
        return this;
    }
}