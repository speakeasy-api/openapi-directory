package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessorBankTransferCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessorBankTransferCreateRequest request;
    public ProcessorBankTransferCreateRequest withRequest(openapisdk.models.shared.ProcessorBankTransferCreateRequest request) {
        this.request = request;
        return this;
    }
}