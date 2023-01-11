package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorAuthGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorAuthGetRequest request;
    public ProcessorAuthGetRequest withRequest(openapisdk.models.shared.ProcessorAuthGetRequest request) {
        this.request = request;
        return this;
    }
}