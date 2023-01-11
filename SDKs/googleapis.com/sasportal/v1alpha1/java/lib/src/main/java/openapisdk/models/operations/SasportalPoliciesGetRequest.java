package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalPoliciesGetRequest {
    public SasportalPoliciesGetQueryParams queryParams;
    public SasportalPoliciesGetRequest withQueryParams(SasportalPoliciesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalGetPolicyRequest request;
    public SasportalPoliciesGetRequest withRequest(openapisdk.models.shared.SasPortalGetPolicyRequest request) {
        this.request = request;
        return this;
    }
    public SasportalPoliciesGetSecurity security;
    public SasportalPoliciesGetRequest withSecurity(SasportalPoliciesGetSecurity security) {
        this.security = security;
        return this;
    }
}