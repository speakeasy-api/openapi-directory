package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalPoliciesSetRequest {
    public SasportalPoliciesSetQueryParams queryParams;
    public SasportalPoliciesSetRequest withQueryParams(SasportalPoliciesSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalSetPolicyRequest request;
    public SasportalPoliciesSetRequest withRequest(openapisdk.models.shared.SasPortalSetPolicyRequest request) {
        this.request = request;
        return this;
    }
    public SasportalPoliciesSetSecurity security;
    public SasportalPoliciesSetRequest withSecurity(SasportalPoliciesSetSecurity security) {
        this.security = security;
        return this;
    }
}