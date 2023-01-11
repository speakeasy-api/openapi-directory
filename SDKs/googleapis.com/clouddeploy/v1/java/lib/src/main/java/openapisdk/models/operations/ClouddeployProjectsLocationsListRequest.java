package openapisdk.models.operations;



public class ClouddeployProjectsLocationsListRequest {
    public ClouddeployProjectsLocationsListPathParams pathParams;
    public ClouddeployProjectsLocationsListRequest withPathParams(ClouddeployProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsListQueryParams queryParams;
    public ClouddeployProjectsLocationsListRequest withQueryParams(ClouddeployProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClouddeployProjectsLocationsListSecurity security;
    public ClouddeployProjectsLocationsListRequest withSecurity(ClouddeployProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}