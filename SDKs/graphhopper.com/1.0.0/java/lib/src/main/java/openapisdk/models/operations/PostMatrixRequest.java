package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMatrixRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostMatrixRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}