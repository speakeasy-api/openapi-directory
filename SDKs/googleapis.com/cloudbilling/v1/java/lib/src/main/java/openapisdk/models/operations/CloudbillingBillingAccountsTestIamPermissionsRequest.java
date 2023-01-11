package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsTestIamPermissionsRequest {
    public CloudbillingBillingAccountsTestIamPermissionsPathParams pathParams;
    public CloudbillingBillingAccountsTestIamPermissionsRequest withPathParams(CloudbillingBillingAccountsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingBillingAccountsTestIamPermissionsQueryParams queryParams;
    public CloudbillingBillingAccountsTestIamPermissionsRequest withQueryParams(CloudbillingBillingAccountsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudbillingBillingAccountsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudbillingBillingAccountsTestIamPermissionsSecurity security;
    public CloudbillingBillingAccountsTestIamPermissionsRequest withSecurity(CloudbillingBillingAccountsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}