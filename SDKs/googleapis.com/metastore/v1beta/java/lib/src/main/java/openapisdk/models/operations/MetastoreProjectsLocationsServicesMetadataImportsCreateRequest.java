package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMetadataImportsCreateRequest {
    public MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams pathParams;
    public MetastoreProjectsLocationsServicesMetadataImportsCreateRequest withPathParams(MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams queryParams;
    public MetastoreProjectsLocationsServicesMetadataImportsCreateRequest withQueryParams(MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MetadataImportInput request;
    public MetastoreProjectsLocationsServicesMetadataImportsCreateRequest withRequest(openapisdk.models.shared.MetadataImportInput request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity security;
    public MetastoreProjectsLocationsServicesMetadataImportsCreateRequest withSecurity(MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity security) {
        this.security = security;
        return this;
    }
}