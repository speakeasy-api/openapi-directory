package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest {
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsPathParams pathParams;
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest withPathParams(NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest withQueryParams(NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity security;
    public NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest withSecurity(NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}