package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansCreateRequest {
    public GkebackupProjectsLocationsBackupPlansCreatePathParams pathParams;
    public GkebackupProjectsLocationsBackupPlansCreateRequest withPathParams(GkebackupProjectsLocationsBackupPlansCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansCreateQueryParams queryParams;
    public GkebackupProjectsLocationsBackupPlansCreateRequest withQueryParams(GkebackupProjectsLocationsBackupPlansCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BackupPlanInput request;
    public GkebackupProjectsLocationsBackupPlansCreateRequest withRequest(openapisdk.models.shared.BackupPlanInput request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansCreateSecurity security;
    public GkebackupProjectsLocationsBackupPlansCreateRequest withSecurity(GkebackupProjectsLocationsBackupPlansCreateSecurity security) {
        this.security = security;
        return this;
    }
}