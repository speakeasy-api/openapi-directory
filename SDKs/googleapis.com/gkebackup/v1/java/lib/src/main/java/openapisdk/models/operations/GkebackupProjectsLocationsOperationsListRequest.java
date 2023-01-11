package openapisdk.models.operations;



public class GkebackupProjectsLocationsOperationsListRequest {
    public GkebackupProjectsLocationsOperationsListPathParams pathParams;
    public GkebackupProjectsLocationsOperationsListRequest withPathParams(GkebackupProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsOperationsListQueryParams queryParams;
    public GkebackupProjectsLocationsOperationsListRequest withQueryParams(GkebackupProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkebackupProjectsLocationsOperationsListSecurity security;
    public GkebackupProjectsLocationsOperationsListRequest withSecurity(GkebackupProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}