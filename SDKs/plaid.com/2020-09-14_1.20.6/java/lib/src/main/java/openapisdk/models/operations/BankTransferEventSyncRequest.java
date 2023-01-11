package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferEventSyncRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferEventSyncRequest request;
    public BankTransferEventSyncRequest withRequest(openapisdk.models.shared.BankTransferEventSyncRequest request) {
        this.request = request;
        return this;
    }
}