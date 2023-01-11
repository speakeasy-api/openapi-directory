package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsCovarianceMatrixRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAssetsCovarianceMatrixRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}