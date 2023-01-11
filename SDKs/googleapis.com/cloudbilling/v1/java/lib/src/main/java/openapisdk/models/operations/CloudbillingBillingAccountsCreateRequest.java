package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsCreateRequest {
    public CloudbillingBillingAccountsCreateQueryParams queryParams;
    public CloudbillingBillingAccountsCreateRequest withQueryParams(CloudbillingBillingAccountsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BillingAccountInput request;
    public CloudbillingBillingAccountsCreateRequest withRequest(openapisdk.models.shared.BillingAccountInput request) {
        this.request = request;
        return this;
    }
    public CloudbillingBillingAccountsCreateSecurity security;
    public CloudbillingBillingAccountsCreateRequest withSecurity(CloudbillingBillingAccountsCreateSecurity security) {
        this.security = security;
        return this;
    }
}