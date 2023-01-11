package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest {
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams pathParams;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest withPathParams(ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsQueryParams queryParams;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest withQueryParams(ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity security;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest withSecurity(ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}