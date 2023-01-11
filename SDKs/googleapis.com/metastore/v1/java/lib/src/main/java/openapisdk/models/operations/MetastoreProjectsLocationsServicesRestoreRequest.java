package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesRestoreRequest {
    public MetastoreProjectsLocationsServicesRestorePathParams pathParams;
    public MetastoreProjectsLocationsServicesRestoreRequest withPathParams(MetastoreProjectsLocationsServicesRestorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesRestoreQueryParams queryParams;
    public MetastoreProjectsLocationsServicesRestoreRequest withQueryParams(MetastoreProjectsLocationsServicesRestoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreServiceRequest request;
    public MetastoreProjectsLocationsServicesRestoreRequest withRequest(openapisdk.models.shared.RestoreServiceRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesRestoreSecurity security;
    public MetastoreProjectsLocationsServicesRestoreRequest withSecurity(MetastoreProjectsLocationsServicesRestoreSecurity security) {
        this.security = security;
        return this;
    }
}