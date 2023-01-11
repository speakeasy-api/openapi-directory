package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest {
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams pathParams;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest withPathParams(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams queryParams;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest withQueryParams(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LookupEffectiveGuestPolicyRequest request;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest withRequest(openapisdk.models.shared.LookupEffectiveGuestPolicyRequest request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity security;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest withSecurity(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity security) {
        this.security = security;
        return this;
    }
}