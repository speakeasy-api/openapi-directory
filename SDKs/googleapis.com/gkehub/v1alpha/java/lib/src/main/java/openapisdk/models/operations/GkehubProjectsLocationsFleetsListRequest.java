package openapisdk.models.operations;



public class GkehubProjectsLocationsFleetsListRequest {
    public GkehubProjectsLocationsFleetsListPathParams pathParams;
    public GkehubProjectsLocationsFleetsListRequest withPathParams(GkehubProjectsLocationsFleetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsFleetsListQueryParams queryParams;
    public GkehubProjectsLocationsFleetsListRequest withQueryParams(GkehubProjectsLocationsFleetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GkehubProjectsLocationsFleetsListSecurity security;
    public GkehubProjectsLocationsFleetsListRequest withSecurity(GkehubProjectsLocationsFleetsListSecurity security) {
        this.security = security;
        return this;
    }
}