package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalPoliciesTestRequest {
    public SasportalPoliciesTestQueryParams queryParams;
    public SasportalPoliciesTestRequest withQueryParams(SasportalPoliciesTestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalTestPermissionsRequest request;
    public SasportalPoliciesTestRequest withRequest(openapisdk.models.shared.SasPortalTestPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public SasportalPoliciesTestSecurity security;
    public SasportalPoliciesTestRequest withSecurity(SasportalPoliciesTestSecurity security) {
        this.security = security;
        return this;
    }
}