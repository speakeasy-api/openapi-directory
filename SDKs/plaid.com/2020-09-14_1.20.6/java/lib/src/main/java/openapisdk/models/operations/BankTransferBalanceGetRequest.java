package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferBalanceGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferBalanceGetRequest request;
    public BankTransferBalanceGetRequest withRequest(openapisdk.models.shared.BankTransferBalanceGetRequest request) {
        this.request = request;
        return this;
    }
}