package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesCreatePathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}