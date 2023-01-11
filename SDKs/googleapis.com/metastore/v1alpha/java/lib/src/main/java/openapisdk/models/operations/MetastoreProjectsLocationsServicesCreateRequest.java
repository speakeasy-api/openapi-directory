package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesCreateRequest {
    public MetastoreProjectsLocationsServicesCreatePathParams pathParams;
    public MetastoreProjectsLocationsServicesCreateRequest withPathParams(MetastoreProjectsLocationsServicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesCreateQueryParams queryParams;
    public MetastoreProjectsLocationsServicesCreateRequest withQueryParams(MetastoreProjectsLocationsServicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public MetastoreProjectsLocationsServicesCreateRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesCreateSecurity security;
    public MetastoreProjectsLocationsServicesCreateRequest withSecurity(MetastoreProjectsLocationsServicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}