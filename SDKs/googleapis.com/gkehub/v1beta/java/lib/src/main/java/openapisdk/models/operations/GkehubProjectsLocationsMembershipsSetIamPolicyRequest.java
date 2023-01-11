package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsSetIamPolicyRequest {
    public GkehubProjectsLocationsMembershipsSetIamPolicyPathParams pathParams;
    public GkehubProjectsLocationsMembershipsSetIamPolicyRequest withPathParams(GkehubProjectsLocationsMembershipsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsSetIamPolicyQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsSetIamPolicyRequest withQueryParams(GkehubProjectsLocationsMembershipsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public GkehubProjectsLocationsMembershipsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsMembershipsSetIamPolicySecurity security;
    public GkehubProjectsLocationsMembershipsSetIamPolicyRequest withSecurity(GkehubProjectsLocationsMembershipsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}