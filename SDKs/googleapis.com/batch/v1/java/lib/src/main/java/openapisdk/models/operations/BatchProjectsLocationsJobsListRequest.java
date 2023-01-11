package openapisdk.models.operations;



public class BatchProjectsLocationsJobsListRequest {
    public BatchProjectsLocationsJobsListPathParams pathParams;
    public BatchProjectsLocationsJobsListRequest withPathParams(BatchProjectsLocationsJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsJobsListQueryParams queryParams;
    public BatchProjectsLocationsJobsListRequest withQueryParams(BatchProjectsLocationsJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BatchProjectsLocationsJobsListSecurity security;
    public BatchProjectsLocationsJobsListRequest withSecurity(BatchProjectsLocationsJobsListSecurity security) {
        this.security = security;
        return this;
    }
}