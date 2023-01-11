package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsUpdateRequest {
    public GamesConfigurationLeaderboardConfigurationsUpdatePathParams pathParams;
    public GamesConfigurationLeaderboardConfigurationsUpdateRequest withPathParams(GamesConfigurationLeaderboardConfigurationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsUpdateQueryParams queryParams;
    public GamesConfigurationLeaderboardConfigurationsUpdateRequest withQueryParams(GamesConfigurationLeaderboardConfigurationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeaderboardConfiguration request;
    public GamesConfigurationLeaderboardConfigurationsUpdateRequest withRequest(openapisdk.models.shared.LeaderboardConfiguration request) {
        this.request = request;
        return this;
    }
    public GamesConfigurationLeaderboardConfigurationsUpdateSecurity security;
    public GamesConfigurationLeaderboardConfigurationsUpdateRequest withSecurity(GamesConfigurationLeaderboardConfigurationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}