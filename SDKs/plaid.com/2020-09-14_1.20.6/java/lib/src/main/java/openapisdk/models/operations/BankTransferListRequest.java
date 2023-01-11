package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferListRequest request;
    public BankTransferListRequest withRequest(openapisdk.models.shared.BankTransferListRequest request) {
        this.request = request;
        return this;
    }
}