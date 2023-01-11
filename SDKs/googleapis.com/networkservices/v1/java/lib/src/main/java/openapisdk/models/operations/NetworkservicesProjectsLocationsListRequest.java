package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsListRequest {
    public NetworkservicesProjectsLocationsListPathParams pathParams;
    public NetworkservicesProjectsLocationsListRequest withPathParams(NetworkservicesProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsListQueryParams queryParams;
    public NetworkservicesProjectsLocationsListRequest withQueryParams(NetworkservicesProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NetworkservicesProjectsLocationsListSecurity security;
    public NetworkservicesProjectsLocationsListRequest withSecurity(NetworkservicesProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}