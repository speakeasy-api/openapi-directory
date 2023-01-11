package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesQueryMetadataRequest {
    public MetastoreProjectsLocationsServicesQueryMetadataPathParams pathParams;
    public MetastoreProjectsLocationsServicesQueryMetadataRequest withPathParams(MetastoreProjectsLocationsServicesQueryMetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesQueryMetadataQueryParams queryParams;
    public MetastoreProjectsLocationsServicesQueryMetadataRequest withQueryParams(MetastoreProjectsLocationsServicesQueryMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryMetadataRequest request;
    public MetastoreProjectsLocationsServicesQueryMetadataRequest withRequest(openapisdk.models.shared.QueryMetadataRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesQueryMetadataSecurity security;
    public MetastoreProjectsLocationsServicesQueryMetadataRequest withSecurity(MetastoreProjectsLocationsServicesQueryMetadataSecurity security) {
        this.security = security;
        return this;
    }
}