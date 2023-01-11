package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalPoliciesSetRequest {
    public ProdTtSasportalPoliciesSetQueryParams queryParams;
    public ProdTtSasportalPoliciesSetRequest withQueryParams(ProdTtSasportalPoliciesSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalSetPolicyRequest request;
    public ProdTtSasportalPoliciesSetRequest withRequest(openapisdk.models.shared.SasPortalSetPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalPoliciesSetSecurity security;
    public ProdTtSasportalPoliciesSetRequest withSecurity(ProdTtSasportalPoliciesSetSecurity security) {
        this.security = security;
        return this;
    }
}