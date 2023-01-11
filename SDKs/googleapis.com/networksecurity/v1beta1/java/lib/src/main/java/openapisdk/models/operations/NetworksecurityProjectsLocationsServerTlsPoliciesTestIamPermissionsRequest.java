package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest {
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams pathParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest withPathParams(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams queryParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest withQueryParams(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest withRequest(openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity security;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest withSecurity(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}