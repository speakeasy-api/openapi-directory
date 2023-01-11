package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest {
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsPathParams pathParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest withPathParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsQueryParams queryParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest withQueryParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity security;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest withSecurity(NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}