package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest {
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams pathParams;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest withPathParams(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest withQueryParams(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity security;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest withSecurity(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}