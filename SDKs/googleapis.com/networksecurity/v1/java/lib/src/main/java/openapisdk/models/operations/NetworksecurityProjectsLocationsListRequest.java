package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsListRequest {
    public NetworksecurityProjectsLocationsListPathParams pathParams;
    public NetworksecurityProjectsLocationsListRequest withPathParams(NetworksecurityProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsListQueryParams queryParams;
    public NetworksecurityProjectsLocationsListRequest withQueryParams(NetworksecurityProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NetworksecurityProjectsLocationsListSecurity security;
    public NetworksecurityProjectsLocationsListRequest withSecurity(NetworksecurityProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}