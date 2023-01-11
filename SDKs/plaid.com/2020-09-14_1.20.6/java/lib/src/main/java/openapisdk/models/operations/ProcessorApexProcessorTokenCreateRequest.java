package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorApexProcessorTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorApexProcessorTokenCreateRequest request;
    public ProcessorApexProcessorTokenCreateRequest withRequest(openapisdk.models.shared.ProcessorApexProcessorTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}