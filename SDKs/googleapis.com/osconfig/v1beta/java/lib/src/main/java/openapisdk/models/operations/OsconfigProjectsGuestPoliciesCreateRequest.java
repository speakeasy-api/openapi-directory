package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsGuestPoliciesCreateRequest {
    public OsconfigProjectsGuestPoliciesCreatePathParams pathParams;
    public OsconfigProjectsGuestPoliciesCreateRequest withPathParams(OsconfigProjectsGuestPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsGuestPoliciesCreateQueryParams queryParams;
    public OsconfigProjectsGuestPoliciesCreateRequest withQueryParams(OsconfigProjectsGuestPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GuestPolicyInput request;
    public OsconfigProjectsGuestPoliciesCreateRequest withRequest(openapisdk.models.shared.GuestPolicyInput request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsGuestPoliciesCreateSecurity security;
    public OsconfigProjectsGuestPoliciesCreateRequest withSecurity(OsconfigProjectsGuestPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}