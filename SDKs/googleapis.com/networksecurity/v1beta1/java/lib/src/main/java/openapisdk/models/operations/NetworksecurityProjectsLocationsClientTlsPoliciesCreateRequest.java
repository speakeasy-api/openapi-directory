package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest {
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams pathParams;
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest withPathParams(NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams queryParams;
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest withQueryParams(NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientTlsPolicyInput request;
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest withRequest(openapisdk.models.shared.ClientTlsPolicyInput request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity security;
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest withSecurity(NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}