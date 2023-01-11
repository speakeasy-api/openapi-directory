package openapisdk.models.operations;



public class GamesStatsGetRequest {
    public GamesStatsGetQueryParams queryParams;
    public GamesStatsGetRequest withQueryParams(GamesStatsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesStatsGetSecurity security;
    public GamesStatsGetRequest withSecurity(GamesStatsGetSecurity security) {
        this.security = security;
        return this;
    }
}