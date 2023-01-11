package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest {
    public NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest withPathParams(NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest withQueryParams(NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndpointPolicyInput request;
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest withRequest(openapisdk.models.shared.EndpointPolicyInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity security;
    public NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest withSecurity(NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}