package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest {
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsPathParams pathParams;
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest withPathParams(NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsQueryParams queryParams;
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest withQueryParams(NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity security;
    public NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest withSecurity(NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}