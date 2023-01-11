package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansListRequest {
    public GkebackupProjectsLocationsBackupPlansListPathParams pathParams;
    public GkebackupProjectsLocationsBackupPlansListRequest withPathParams(GkebackupProjectsLocationsBackupPlansListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansListQueryParams queryParams;
    public GkebackupProjectsLocationsBackupPlansListRequest withQueryParams(GkebackupProjectsLocationsBackupPlansListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkebackupProjectsLocationsBackupPlansListSecurity security;
    public GkebackupProjectsLocationsBackupPlansListRequest withSecurity(GkebackupProjectsLocationsBackupPlansListSecurity security) {
        this.security = security;
        return this;
    }
}