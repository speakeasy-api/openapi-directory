package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest {
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams pathParams;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest withPathParams(ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsQueryParams queryParams;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest withQueryParams(ConnectorsProjectsLocationsProvidersTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity security;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest withSecurity(ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}