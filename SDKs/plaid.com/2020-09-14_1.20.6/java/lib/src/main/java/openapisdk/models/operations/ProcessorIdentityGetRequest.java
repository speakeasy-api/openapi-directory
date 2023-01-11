package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorIdentityGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorIdentityGetRequest request;
    public ProcessorIdentityGetRequest withRequest(openapisdk.models.shared.ProcessorIdentityGetRequest request) {
        this.request = request;
        return this;
    }
}