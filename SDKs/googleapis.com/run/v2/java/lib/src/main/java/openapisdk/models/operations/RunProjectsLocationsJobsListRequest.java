package openapisdk.models.operations;



public class RunProjectsLocationsJobsListRequest {
    public RunProjectsLocationsJobsListPathParams pathParams;
    public RunProjectsLocationsJobsListRequest withPathParams(RunProjectsLocationsJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsJobsListQueryParams queryParams;
    public RunProjectsLocationsJobsListRequest withQueryParams(RunProjectsLocationsJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunProjectsLocationsJobsListSecurity security;
    public RunProjectsLocationsJobsListRequest withSecurity(RunProjectsLocationsJobsListSecurity security) {
        this.security = security;
        return this;
    }
}