package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest {
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyPathParams pathParams;
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest withPathParams(NetworkconnectivityProjectsLocationsSpokesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest withQueryParams(NetworkconnectivityProjectsLocationsSpokesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity security;
    public NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest withSecurity(NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}