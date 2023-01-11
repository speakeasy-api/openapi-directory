package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsTestIamPermissionsRequest {
    public IdsProjectsLocationsEndpointsTestIamPermissionsPathParams pathParams;
    public IdsProjectsLocationsEndpointsTestIamPermissionsRequest withPathParams(IdsProjectsLocationsEndpointsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams queryParams;
    public IdsProjectsLocationsEndpointsTestIamPermissionsRequest withQueryParams(IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public IdsProjectsLocationsEndpointsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public IdsProjectsLocationsEndpointsTestIamPermissionsSecurity security;
    public IdsProjectsLocationsEndpointsTestIamPermissionsRequest withSecurity(IdsProjectsLocationsEndpointsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}