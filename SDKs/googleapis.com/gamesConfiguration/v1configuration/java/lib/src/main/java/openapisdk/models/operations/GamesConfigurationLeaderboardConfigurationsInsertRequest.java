package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsInsertRequest {
    public GamesConfigurationLeaderboardConfigurationsInsertPathParams pathParams;
    public GamesConfigurationLeaderboardConfigurationsInsertRequest withPathParams(GamesConfigurationLeaderboardConfigurationsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsInsertQueryParams queryParams;
    public GamesConfigurationLeaderboardConfigurationsInsertRequest withQueryParams(GamesConfigurationLeaderboardConfigurationsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeaderboardConfiguration request;
    public GamesConfigurationLeaderboardConfigurationsInsertRequest withRequest(openapisdk.models.shared.LeaderboardConfiguration request) {
        this.request = request;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsInsertSecurity security;
    public GamesConfigurationLeaderboardConfigurationsInsertRequest withSecurity(GamesConfigurationLeaderboardConfigurationsInsertSecurity security) {
        this.security = security;
        return this;
    }
}