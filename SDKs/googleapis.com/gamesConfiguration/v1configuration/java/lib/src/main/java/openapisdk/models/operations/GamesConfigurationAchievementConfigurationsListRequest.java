package openapisdk.models.operations;



public class GamesConfigurationAchievementConfigurationsListRequest {
    public GamesConfigurationAchievementConfigurationsListPathParams pathParams;
    public GamesConfigurationAchievementConfigurationsListRequest withPathParams(GamesConfigurationAchievementConfigurationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsListQueryParams queryParams;
    public GamesConfigurationAchievementConfigurationsListRequest withQueryParams(GamesConfigurationAchievementConfigurationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesConfigurationAchievementConfigurationsListSecurity security;
    public GamesConfigurationAchievementConfigurationsListRequest withSecurity(GamesConfigurationAchievementConfigurationsListSecurity security) {
        this.security = security;
        return this;
    }
}