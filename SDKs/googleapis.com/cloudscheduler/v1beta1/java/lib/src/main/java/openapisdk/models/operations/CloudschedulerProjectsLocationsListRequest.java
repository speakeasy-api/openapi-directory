package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsListRequest {
    public CloudschedulerProjectsLocationsListPathParams pathParams;
    public CloudschedulerProjectsLocationsListRequest withPathParams(CloudschedulerProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsListQueryParams queryParams;
    public CloudschedulerProjectsLocationsListRequest withQueryParams(CloudschedulerProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudschedulerProjectsLocationsListSecurity security;
    public CloudschedulerProjectsLocationsListRequest withSecurity(CloudschedulerProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}