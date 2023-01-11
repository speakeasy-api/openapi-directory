package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesSetIamPolicyRequest {
    public DnsManagedZonesSetIamPolicyPathParams pathParams;
    public DnsManagedZonesSetIamPolicyRequest withPathParams(DnsManagedZonesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesSetIamPolicyQueryParams queryParams;
    public DnsManagedZonesSetIamPolicyRequest withQueryParams(DnsManagedZonesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request;
    public DnsManagedZonesSetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesSetIamPolicySecurity security;
    public DnsManagedZonesSetIamPolicyRequest withSecurity(DnsManagedZonesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}