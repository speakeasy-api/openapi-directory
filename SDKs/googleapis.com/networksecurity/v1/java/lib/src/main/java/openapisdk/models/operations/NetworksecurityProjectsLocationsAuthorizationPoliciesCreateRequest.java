package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest {
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams pathParams;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest withPathParams(NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams queryParams;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest withQueryParams(NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorizationPolicyInput request;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest withRequest(openapisdk.models.shared.AuthorizationPolicyInput request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity security;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest withSecurity(NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}