package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateApplicationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}