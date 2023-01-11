package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsSetIamPolicyRequest {
    public CloudbillingBillingAccountsSetIamPolicyPathParams pathParams;
    public CloudbillingBillingAccountsSetIamPolicyRequest withPathParams(CloudbillingBillingAccountsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingBillingAccountsSetIamPolicyQueryParams queryParams;
    public CloudbillingBillingAccountsSetIamPolicyRequest withQueryParams(CloudbillingBillingAccountsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudbillingBillingAccountsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudbillingBillingAccountsSetIamPolicySecurity security;
    public CloudbillingBillingAccountsSetIamPolicyRequest withSecurity(CloudbillingBillingAccountsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}