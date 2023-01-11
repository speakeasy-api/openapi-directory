package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorBalanceGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorBalanceGetRequest request;
    public ProcessorBalanceGetRequest withRequest(openapisdk.models.shared.ProcessorBalanceGetRequest request) {
        this.request = request;
        return this;
    }
}