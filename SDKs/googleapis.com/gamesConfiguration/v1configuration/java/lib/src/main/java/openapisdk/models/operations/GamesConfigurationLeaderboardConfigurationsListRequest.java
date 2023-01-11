package openapisdk.models.operations;



public class GamesConfigurationLeaderboardConfigurationsListRequest {
    public GamesConfigurationLeaderboardConfigurationsListPathParams pathParams;
    public GamesConfigurationLeaderboardConfigurationsListRequest withPathParams(GamesConfigurationLeaderboardConfigurationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsListQueryParams queryParams;
    public GamesConfigurationLeaderboardConfigurationsListRequest withQueryParams(GamesConfigurationLeaderboardConfigurationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsListSecurity security;
    public GamesConfigurationLeaderboardConfigurationsListRequest withSecurity(GamesConfigurationLeaderboardConfigurationsListSecurity security) {
        this.security = security;
        return this;
    }
}