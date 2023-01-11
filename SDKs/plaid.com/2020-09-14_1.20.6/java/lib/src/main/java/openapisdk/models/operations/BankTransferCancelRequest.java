package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferCancelRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferCancelRequest request;
    public BankTransferCancelRequest withRequest(openapisdk.models.shared.BankTransferCancelRequest request) {
        this.request = request;
        return this;
    }
}