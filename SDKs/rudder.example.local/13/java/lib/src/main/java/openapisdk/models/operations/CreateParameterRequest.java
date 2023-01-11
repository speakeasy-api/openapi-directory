package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParameterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Parameter request;
    public CreateParameterRequest withRequest(openapisdk.models.shared.Parameter request) {
        this.request = request;
        return this;
    }
}