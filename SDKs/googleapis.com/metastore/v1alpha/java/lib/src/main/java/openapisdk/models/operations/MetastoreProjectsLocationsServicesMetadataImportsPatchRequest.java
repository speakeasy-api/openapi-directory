package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMetadataImportsPatchRequest {
    public MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams pathParams;
    public MetastoreProjectsLocationsServicesMetadataImportsPatchRequest withPathParams(MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams queryParams;
    public MetastoreProjectsLocationsServicesMetadataImportsPatchRequest withQueryParams(MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MetadataImportInput request;
    public MetastoreProjectsLocationsServicesMetadataImportsPatchRequest withRequest(openapisdk.models.shared.MetadataImportInput request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity security;
    public MetastoreProjectsLocationsServicesMetadataImportsPatchRequest withSecurity(MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity security) {
        this.security = security;
        return this;
    }
}