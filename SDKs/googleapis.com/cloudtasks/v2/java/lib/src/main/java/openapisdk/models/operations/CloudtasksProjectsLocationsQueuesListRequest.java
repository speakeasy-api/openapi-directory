package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesListRequest {
    public CloudtasksProjectsLocationsQueuesListPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesListRequest withPathParams(CloudtasksProjectsLocationsQueuesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesListQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesListRequest withQueryParams(CloudtasksProjectsLocationsQueuesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesListSecurity security;
    public CloudtasksProjectsLocationsQueuesListRequest withSecurity(CloudtasksProjectsLocationsQueuesListSecurity security) {
        this.security = security;
        return this;
    }
}