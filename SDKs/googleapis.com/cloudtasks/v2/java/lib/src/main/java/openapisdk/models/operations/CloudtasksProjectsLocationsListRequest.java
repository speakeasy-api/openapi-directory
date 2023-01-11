package openapisdk.models.operations;



public class CloudtasksProjectsLocationsListRequest {
    public CloudtasksProjectsLocationsListPathParams pathParams;
    public CloudtasksProjectsLocationsListRequest withPathParams(CloudtasksProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsListQueryParams queryParams;
    public CloudtasksProjectsLocationsListRequest withQueryParams(CloudtasksProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudtasksProjectsLocationsListSecurity security;
    public CloudtasksProjectsLocationsListRequest withSecurity(CloudtasksProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}