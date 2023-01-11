package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BankTransferMigrateAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankTransferMigrateAccountRequest request;
    public BankTransferMigrateAccountRequest withRequest(openapisdk.models.shared.BankTransferMigrateAccountRequest request) {
        this.request = request;
        return this;
    }
}