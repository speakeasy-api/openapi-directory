package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApplicationRequestBody request;
    public CreateApplicationRequest withRequest(CreateApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}