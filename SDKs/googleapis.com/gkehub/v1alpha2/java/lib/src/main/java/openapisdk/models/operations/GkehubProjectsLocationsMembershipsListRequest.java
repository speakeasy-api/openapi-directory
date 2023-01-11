package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsListRequest {
    public GkehubProjectsLocationsMembershipsListPathParams pathParams;
    public GkehubProjectsLocationsMembershipsListRequest withPathParams(GkehubProjectsLocationsMembershipsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsListQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsListRequest withQueryParams(GkehubProjectsLocationsMembershipsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsListSecurity security;
    public GkehubProjectsLocationsMembershipsListRequest withSecurity(GkehubProjectsLocationsMembershipsListSecurity security) {
        this.security = security;
        return this;
    }
}