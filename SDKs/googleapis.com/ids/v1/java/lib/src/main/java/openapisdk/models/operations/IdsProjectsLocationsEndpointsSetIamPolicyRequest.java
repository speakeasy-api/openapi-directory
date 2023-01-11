package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsSetIamPolicyRequest {
    public IdsProjectsLocationsEndpointsSetIamPolicyPathParams pathParams;
    public IdsProjectsLocationsEndpointsSetIamPolicyRequest withPathParams(IdsProjectsLocationsEndpointsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdsProjectsLocationsEndpointsSetIamPolicyQueryParams queryParams;
    public IdsProjectsLocationsEndpointsSetIamPolicyRequest withQueryParams(IdsProjectsLocationsEndpointsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public IdsProjectsLocationsEndpointsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IdsProjectsLocationsEndpointsSetIamPolicySecurity security;
    public IdsProjectsLocationsEndpointsSetIamPolicyRequest withSecurity(IdsProjectsLocationsEndpointsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}