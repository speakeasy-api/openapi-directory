package openapisdk.models.operations;



public class GkehubProjectsLocationsListRequest {
    public GkehubProjectsLocationsListPathParams pathParams;
    public GkehubProjectsLocationsListRequest withPathParams(GkehubProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsListQueryParams queryParams;
    public GkehubProjectsLocationsListRequest withQueryParams(GkehubProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkehubProjectsLocationsListSecurity security;
    public GkehubProjectsLocationsListRequest withSecurity(GkehubProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}