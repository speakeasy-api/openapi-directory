package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsCreateRequest {
    public MybusinessAccountsCreateQueryParams queryParams;
    public MybusinessAccountsCreateRequest withQueryParams(MybusinessAccountsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public MybusinessAccountsCreateRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
}