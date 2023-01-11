package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountsBalanceGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountsBalanceGetRequest request;
    public AccountsBalanceGetRequest withRequest(openapisdk.models.shared.AccountsBalanceGetRequest request) {
        this.request = request;
        return this;
    }
}