package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalculateMatrixRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CalculateMatrixRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}