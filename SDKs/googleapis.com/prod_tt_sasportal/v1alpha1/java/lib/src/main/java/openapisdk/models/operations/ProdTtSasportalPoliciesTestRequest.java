package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalPoliciesTestRequest {
    public ProdTtSasportalPoliciesTestQueryParams queryParams;
    public ProdTtSasportalPoliciesTestRequest withQueryParams(ProdTtSasportalPoliciesTestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalTestPermissionsRequest request;
    public ProdTtSasportalPoliciesTestRequest withRequest(openapisdk.models.shared.SasPortalTestPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalPoliciesTestSecurity security;
    public ProdTtSasportalPoliciesTestRequest withSecurity(ProdTtSasportalPoliciesTestSecurity security) {
        this.security = security;
        return this;
    }
}