package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferCreateRequest request;
    public BankTransferCreateRequest withRequest(openapisdk.models.shared.BankTransferCreateRequest request) {
        this.request = request;
        return this;
    }
}