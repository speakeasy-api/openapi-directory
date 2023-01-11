package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndpointInput request;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest withRequest(openapisdk.models.shared.EndpointInput request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity security) {
        this.security = security;
        return this;
    }
}