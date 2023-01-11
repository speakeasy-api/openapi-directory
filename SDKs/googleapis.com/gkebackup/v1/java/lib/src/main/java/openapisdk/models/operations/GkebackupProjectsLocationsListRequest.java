package openapisdk.models.operations;



public class GkebackupProjectsLocationsListRequest {
    public GkebackupProjectsLocationsListPathParams pathParams;
    public GkebackupProjectsLocationsListRequest withPathParams(GkebackupProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsListQueryParams queryParams;
    public GkebackupProjectsLocationsListRequest withQueryParams(GkebackupProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkebackupProjectsLocationsListSecurity security;
    public GkebackupProjectsLocationsListRequest withSecurity(GkebackupProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}