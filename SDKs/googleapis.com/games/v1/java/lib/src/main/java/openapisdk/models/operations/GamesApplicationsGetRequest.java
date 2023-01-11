package openapisdk.models.operations;



public class GamesApplicationsGetRequest {
    public GamesApplicationsGetPathParams pathParams;
    public GamesApplicationsGetRequest withPathParams(GamesApplicationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesApplicationsGetQueryParams queryParams;
    public GamesApplicationsGetRequest withQueryParams(GamesApplicationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesApplicationsGetSecurity security;
    public GamesApplicationsGetRequest withSecurity(GamesApplicationsGetSecurity security) {
        this.security = security;
        return this;
    }
}