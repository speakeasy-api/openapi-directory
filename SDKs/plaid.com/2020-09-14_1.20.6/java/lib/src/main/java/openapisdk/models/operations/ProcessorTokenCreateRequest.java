package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorTokenCreateRequest request;
    public ProcessorTokenCreateRequest withRequest(openapisdk.models.shared.ProcessorTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}