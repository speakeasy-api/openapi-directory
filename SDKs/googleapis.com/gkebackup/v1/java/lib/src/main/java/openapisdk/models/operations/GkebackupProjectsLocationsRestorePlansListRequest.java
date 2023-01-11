package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansListRequest {
    public GkebackupProjectsLocationsRestorePlansListPathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansListRequest withPathParams(GkebackupProjectsLocationsRestorePlansListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansListQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansListRequest withQueryParams(GkebackupProjectsLocationsRestorePlansListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansListSecurity security;
    public GkebackupProjectsLocationsRestorePlansListRequest withSecurity(GkebackupProjectsLocationsRestorePlansListSecurity security) {
        this.security = security;
        return this;
    }
}