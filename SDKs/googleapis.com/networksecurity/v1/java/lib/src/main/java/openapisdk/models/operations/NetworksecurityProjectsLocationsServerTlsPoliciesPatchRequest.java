package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest {
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchPathParams pathParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest withPathParams(NetworksecurityProjectsLocationsServerTlsPoliciesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchQueryParams queryParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest withQueryParams(NetworksecurityProjectsLocationsServerTlsPoliciesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServerTlsPolicyInput request;
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest withRequest(openapisdk.models.shared.ServerTlsPolicyInput request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchSecurity security;
    public NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest withSecurity(NetworksecurityProjectsLocationsServerTlsPoliciesPatchSecurity security) {
        this.security = security;
        return this;
    }
}