package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesAlterLocationRequest {
    public MetastoreProjectsLocationsServicesAlterLocationPathParams pathParams;
    public MetastoreProjectsLocationsServicesAlterLocationRequest withPathParams(MetastoreProjectsLocationsServicesAlterLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesAlterLocationQueryParams queryParams;
    public MetastoreProjectsLocationsServicesAlterLocationRequest withQueryParams(MetastoreProjectsLocationsServicesAlterLocationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AlterMetadataResourceLocationRequest request;
    public MetastoreProjectsLocationsServicesAlterLocationRequest withRequest(openapisdk.models.shared.AlterMetadataResourceLocationRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesAlterLocationSecurity security;
    public MetastoreProjectsLocationsServicesAlterLocationRequest withSecurity(MetastoreProjectsLocationsServicesAlterLocationSecurity security) {
        this.security = security;
        return this;
    }
}