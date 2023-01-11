package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesExportMetadataRequest {
    public MetastoreProjectsLocationsServicesExportMetadataPathParams pathParams;
    public MetastoreProjectsLocationsServicesExportMetadataRequest withPathParams(MetastoreProjectsLocationsServicesExportMetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesExportMetadataQueryParams queryParams;
    public MetastoreProjectsLocationsServicesExportMetadataRequest withQueryParams(MetastoreProjectsLocationsServicesExportMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportMetadataRequest request;
    public MetastoreProjectsLocationsServicesExportMetadataRequest withRequest(openapisdk.models.shared.ExportMetadataRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesExportMetadataSecurity security;
    public MetastoreProjectsLocationsServicesExportMetadataRequest withSecurity(MetastoreProjectsLocationsServicesExportMetadataSecurity security) {
        this.security = security;
        return this;
    }
}