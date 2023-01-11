package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsListRequest {
    public CloudschedulerProjectsLocationsJobsListPathParams pathParams;
    public CloudschedulerProjectsLocationsJobsListRequest withPathParams(CloudschedulerProjectsLocationsJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsListQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsListRequest withQueryParams(CloudschedulerProjectsLocationsJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsListSecurity security;
    public CloudschedulerProjectsLocationsJobsListRequest withSecurity(CloudschedulerProjectsLocationsJobsListSecurity security) {
        this.security = security;
        return this;
    }
}