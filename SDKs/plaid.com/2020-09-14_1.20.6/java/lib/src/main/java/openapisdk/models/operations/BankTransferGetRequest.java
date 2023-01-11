package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferGetRequest request;
    public BankTransferGetRequest withRequest(openapisdk.models.shared.BankTransferGetRequest request) {
        this.request = request;
        return this;
    }
}