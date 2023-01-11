package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalPoliciesGetRequest {
    public ProdTtSasportalPoliciesGetQueryParams queryParams;
    public ProdTtSasportalPoliciesGetRequest withQueryParams(ProdTtSasportalPoliciesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalGetPolicyRequest request;
    public ProdTtSasportalPoliciesGetRequest withRequest(openapisdk.models.shared.SasPortalGetPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalPoliciesGetSecurity security;
    public ProdTtSasportalPoliciesGetRequest withSecurity(ProdTtSasportalPoliciesGetSecurity security) {
        this.security = security;
        return this;
    }
}