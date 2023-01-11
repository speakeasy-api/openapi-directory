package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsCreateRequest {
    public MetastoreProjectsLocationsServicesBackupsCreatePathParams pathParams;
    public MetastoreProjectsLocationsServicesBackupsCreateRequest withPathParams(MetastoreProjectsLocationsServicesBackupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesBackupsCreateQueryParams queryParams;
    public MetastoreProjectsLocationsServicesBackupsCreateRequest withQueryParams(MetastoreProjectsLocationsServicesBackupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BackupInput request;
    public MetastoreProjectsLocationsServicesBackupsCreateRequest withRequest(openapisdk.models.shared.BackupInput request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesBackupsCreateSecurity security;
    public MetastoreProjectsLocationsServicesBackupsCreateRequest withSecurity(MetastoreProjectsLocationsServicesBackupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}