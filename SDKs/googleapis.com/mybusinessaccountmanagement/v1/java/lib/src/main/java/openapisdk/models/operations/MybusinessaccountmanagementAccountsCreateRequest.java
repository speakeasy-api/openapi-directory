package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsCreateRequest {
    public MybusinessaccountmanagementAccountsCreateQueryParams queryParams;
    public MybusinessaccountmanagementAccountsCreateRequest withQueryParams(MybusinessaccountmanagementAccountsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountInput request;
    public MybusinessaccountmanagementAccountsCreateRequest withRequest(openapisdk.models.shared.AccountInput request) {
        this.request = request;
        return this;
    }
}