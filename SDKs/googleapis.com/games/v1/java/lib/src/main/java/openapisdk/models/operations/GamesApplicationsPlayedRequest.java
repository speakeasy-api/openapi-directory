package openapisdk.models.operations;



public class GamesApplicationsPlayedRequest {
    public GamesApplicationsPlayedQueryParams queryParams;
    public GamesApplicationsPlayedRequest withQueryParams(GamesApplicationsPlayedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesApplicationsPlayedSecurity security;
    public GamesApplicationsPlayedRequest withSecurity(GamesApplicationsPlayedSecurity security) {
        this.security = security;
        return this;
    }
}