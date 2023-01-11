package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCovarianceMatrixSampleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsCovarianceMatrixSampleRequestBody request;
    public PostAssetsCovarianceMatrixSampleRequest withRequest(PostAssetsCovarianceMatrixSampleRequestBody request) {
        this.request = request;
        return this;
    }
}