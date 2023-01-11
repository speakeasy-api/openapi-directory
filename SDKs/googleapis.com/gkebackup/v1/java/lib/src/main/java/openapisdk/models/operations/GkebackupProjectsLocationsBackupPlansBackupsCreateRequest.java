package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansBackupsCreateRequest {
    public GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams pathParams;
    public GkebackupProjectsLocationsBackupPlansBackupsCreateRequest withPathParams(GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams queryParams;
    public GkebackupProjectsLocationsBackupPlansBackupsCreateRequest withQueryParams(GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BackupInput request;
    public GkebackupProjectsLocationsBackupPlansBackupsCreateRequest withRequest(openapisdk.models.shared.BackupInput request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity security;
    public GkebackupProjectsLocationsBackupPlansBackupsCreateRequest withSecurity(GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}