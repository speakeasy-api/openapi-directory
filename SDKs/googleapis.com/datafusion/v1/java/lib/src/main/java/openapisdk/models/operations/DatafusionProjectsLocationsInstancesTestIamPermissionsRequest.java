package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesTestIamPermissionsRequest {
    public DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams pathParams;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsRequest withPathParams(DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesTestIamPermissionsQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsRequest withQueryParams(DatafusionProjectsLocationsInstancesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity security;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsRequest withSecurity(DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}