package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferEventListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferEventListRequest request;
    public BankTransferEventListRequest withRequest(openapisdk.models.shared.BankTransferEventListRequest request) {
        this.request = request;
        return this;
    }
}