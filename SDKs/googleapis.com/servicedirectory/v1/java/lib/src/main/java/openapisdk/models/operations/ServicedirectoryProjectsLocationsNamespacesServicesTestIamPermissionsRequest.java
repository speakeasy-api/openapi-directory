package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}