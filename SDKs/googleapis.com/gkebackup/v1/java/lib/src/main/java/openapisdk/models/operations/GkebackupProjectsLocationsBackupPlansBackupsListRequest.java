package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansBackupsListRequest {
    public GkebackupProjectsLocationsBackupPlansBackupsListPathParams pathParams;
    public GkebackupProjectsLocationsBackupPlansBackupsListRequest withPathParams(GkebackupProjectsLocationsBackupPlansBackupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansBackupsListQueryParams queryParams;
    public GkebackupProjectsLocationsBackupPlansBackupsListRequest withQueryParams(GkebackupProjectsLocationsBackupPlansBackupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansBackupsListSecurity security;
    public GkebackupProjectsLocationsBackupPlansBackupsListRequest withSecurity(GkebackupProjectsLocationsBackupPlansBackupsListSecurity security) {
        this.security = security;
        return this;
    }
}