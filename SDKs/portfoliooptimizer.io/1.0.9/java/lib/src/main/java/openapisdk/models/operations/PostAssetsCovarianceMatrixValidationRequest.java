package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCovarianceMatrixValidationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsCovarianceMatrixValidationRequestBody request;
    public PostAssetsCovarianceMatrixValidationRequest withRequest(PostAssetsCovarianceMatrixValidationRequestBody request) {
        this.request = request;
        return this;
    }
}