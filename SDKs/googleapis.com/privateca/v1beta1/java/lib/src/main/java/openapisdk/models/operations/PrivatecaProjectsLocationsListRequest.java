package openapisdk.models.operations;



public class PrivatecaProjectsLocationsListRequest {
    public PrivatecaProjectsLocationsListPathParams pathParams;
    public PrivatecaProjectsLocationsListRequest withPathParams(PrivatecaProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsListQueryParams queryParams;
    public PrivatecaProjectsLocationsListRequest withQueryParams(PrivatecaProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivatecaProjectsLocationsListSecurity security;
    public PrivatecaProjectsLocationsListRequest withSecurity(PrivatecaProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}