package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsInsertRequest {
    public GamesConfigurationAchievementConfigurationsInsertPathParams pathParams;
    public GamesConfigurationAchievementConfigurationsInsertRequest withPathParams(GamesConfigurationAchievementConfigurationsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsInsertQueryParams queryParams;
    public GamesConfigurationAchievementConfigurationsInsertRequest withQueryParams(GamesConfigurationAchievementConfigurationsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AchievementConfiguration request;
    public GamesConfigurationAchievementConfigurationsInsertRequest withRequest(openapisdk.models.shared.AchievementConfiguration request) {
        this.request = request;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsInsertSecurity security;
    public GamesConfigurationAchievementConfigurationsInsertRequest withSecurity(GamesConfigurationAchievementConfigurationsInsertSecurity security) {
        this.security = security;
        return this;
    }
}