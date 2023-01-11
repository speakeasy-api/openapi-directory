package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorStripeBankAccountTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorStripeBankAccountTokenCreateRequest request;
    public ProcessorStripeBankAccountTokenCreateRequest withRequest(openapisdk.models.shared.ProcessorStripeBankAccountTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}