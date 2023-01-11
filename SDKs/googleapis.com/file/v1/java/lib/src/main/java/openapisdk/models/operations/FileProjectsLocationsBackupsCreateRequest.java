package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsBackupsCreateRequest {
    public FileProjectsLocationsBackupsCreatePathParams pathParams;
    public FileProjectsLocationsBackupsCreateRequest withPathParams(FileProjectsLocationsBackupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsBackupsCreateQueryParams queryParams;
    public FileProjectsLocationsBackupsCreateRequest withQueryParams(FileProjectsLocationsBackupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BackupInput request;
    public FileProjectsLocationsBackupsCreateRequest withRequest(openapisdk.models.shared.BackupInput request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsBackupsCreateSecurity security;
    public FileProjectsLocationsBackupsCreateRequest withSecurity(FileProjectsLocationsBackupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}