package openapisdk.models.operations;



public class NetworkmanagementProjectsLocationsListRequest {
    public NetworkmanagementProjectsLocationsListPathParams pathParams;
    public NetworkmanagementProjectsLocationsListRequest withPathParams(NetworkmanagementProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsListQueryParams queryParams;
    public NetworkmanagementProjectsLocationsListRequest withQueryParams(NetworkmanagementProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsListSecurity security;
    public NetworkmanagementProjectsLocationsListRequest withSecurity(NetworkmanagementProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}