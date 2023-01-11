package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResolveServiceRequest request;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest withRequest(openapisdk.models.shared.ResolveServiceRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity security) {
        this.security = security;
        return this;
    }
}