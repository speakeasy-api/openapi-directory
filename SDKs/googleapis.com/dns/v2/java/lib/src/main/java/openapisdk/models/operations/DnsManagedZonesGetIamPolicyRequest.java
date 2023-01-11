package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesGetIamPolicyRequest {
    public DnsManagedZonesGetIamPolicyPathParams pathParams;
    public DnsManagedZonesGetIamPolicyRequest withPathParams(DnsManagedZonesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesGetIamPolicyQueryParams queryParams;
    public DnsManagedZonesGetIamPolicyRequest withQueryParams(DnsManagedZonesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1GetIamPolicyRequest request;
    public DnsManagedZonesGetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesGetIamPolicySecurity security;
    public DnsManagedZonesGetIamPolicyRequest withSecurity(DnsManagedZonesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}