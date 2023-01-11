package openapisdk.models.operations;



public class GamesApplicationsVerifyRequest {
    public GamesApplicationsVerifyPathParams pathParams;
    public GamesApplicationsVerifyRequest withPathParams(GamesApplicationsVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesApplicationsVerifyQueryParams queryParams;
    public GamesApplicationsVerifyRequest withQueryParams(GamesApplicationsVerifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesApplicationsVerifySecurity security;
    public GamesApplicationsVerifyRequest withSecurity(GamesApplicationsVerifySecurity security) {
        this.security = security;
        return this;
    }
}