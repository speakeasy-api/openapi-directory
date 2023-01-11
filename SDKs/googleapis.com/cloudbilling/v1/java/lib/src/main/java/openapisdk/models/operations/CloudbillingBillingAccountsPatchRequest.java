package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsPatchRequest {
    public CloudbillingBillingAccountsPatchPathParams pathParams;
    public CloudbillingBillingAccountsPatchRequest withPathParams(CloudbillingBillingAccountsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingBillingAccountsPatchQueryParams queryParams;
    public CloudbillingBillingAccountsPatchRequest withQueryParams(CloudbillingBillingAccountsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BillingAccountInput request;
    public CloudbillingBillingAccountsPatchRequest withRequest(openapisdk.models.shared.BillingAccountInput request) {
        this.request = request;
        return this;
    }
    public CloudbillingBillingAccountsPatchSecurity security;
    public CloudbillingBillingAccountsPatchRequest withSecurity(CloudbillingBillingAccountsPatchSecurity security) {
        this.security = security;
        return this;
    }
}