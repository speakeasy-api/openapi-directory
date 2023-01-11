package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountsGetRequest request;
    public AccountsGetRequest withRequest(openapisdk.models.shared.AccountsGetRequest request) {
        this.request = request;
        return this;
    }
}