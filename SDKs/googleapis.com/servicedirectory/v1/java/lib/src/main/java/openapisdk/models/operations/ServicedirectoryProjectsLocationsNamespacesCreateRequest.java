package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesCreateRequest {
    public ServicedirectoryProjectsLocationsNamespacesCreatePathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesCreateRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesCreateQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesCreateRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NamespaceInput request;
    public ServicedirectoryProjectsLocationsNamespacesCreateRequest withRequest(openapisdk.models.shared.NamespaceInput request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesCreateSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesCreateRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesCreateSecurity security) {
        this.security = security;
        return this;
    }
}