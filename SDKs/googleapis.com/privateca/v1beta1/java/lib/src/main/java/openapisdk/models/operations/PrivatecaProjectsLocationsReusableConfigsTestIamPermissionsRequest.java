package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest {
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsPathParams pathParams;
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest withPathParams(PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsQueryParams queryParams;
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest withQueryParams(PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsSecurity security;
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest withSecurity(PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}