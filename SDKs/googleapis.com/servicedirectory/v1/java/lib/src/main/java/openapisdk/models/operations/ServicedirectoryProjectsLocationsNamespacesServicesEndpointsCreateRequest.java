package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndpointInput request;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest withRequest(openapisdk.models.shared.EndpointInput request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity security) {
        this.security = security;
        return this;
    }
}