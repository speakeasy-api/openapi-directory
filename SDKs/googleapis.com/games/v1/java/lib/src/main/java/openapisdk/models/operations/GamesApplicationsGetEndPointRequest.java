package openapisdk.models.operations;



public class GamesApplicationsGetEndPointRequest {
    public GamesApplicationsGetEndPointQueryParams queryParams;
    public GamesApplicationsGetEndPointRequest withQueryParams(GamesApplicationsGetEndPointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesApplicationsGetEndPointSecurity security;
    public GamesApplicationsGetEndPointRequest withSecurity(GamesApplicationsGetEndPointSecurity security) {
        this.security = security;
        return this;
    }
}