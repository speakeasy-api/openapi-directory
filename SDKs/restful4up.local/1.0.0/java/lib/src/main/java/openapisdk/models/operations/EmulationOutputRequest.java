package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmulationOutputRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public EmulationOutputRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}