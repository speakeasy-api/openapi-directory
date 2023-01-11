package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsUpdateRequest {
    public GamesConfigurationAchievementConfigurationsUpdatePathParams pathParams;
    public GamesConfigurationAchievementConfigurationsUpdateRequest withPathParams(GamesConfigurationAchievementConfigurationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsUpdateQueryParams queryParams;
    public GamesConfigurationAchievementConfigurationsUpdateRequest withQueryParams(GamesConfigurationAchievementConfigurationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AchievementConfiguration request;
    public GamesConfigurationAchievementConfigurationsUpdateRequest withRequest(openapisdk.models.shared.AchievementConfiguration request) {
        this.request = request;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsUpdateSecurity security;
    public GamesConfigurationAchievementConfigurationsUpdateRequest withSecurity(GamesConfigurationAchievementConfigurationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}