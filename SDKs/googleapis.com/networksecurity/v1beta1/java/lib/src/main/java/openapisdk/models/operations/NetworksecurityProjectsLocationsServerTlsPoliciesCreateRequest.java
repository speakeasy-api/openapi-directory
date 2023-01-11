package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest {
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams pathParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest withPathParams(NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateQueryParams queryParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest withQueryParams(NetworksecurityProjectsLocationsServerTlsPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServerTlsPolicyInput request;
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest withRequest(openapisdk.models.shared.ServerTlsPolicyInput request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity security;
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest withSecurity(NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}