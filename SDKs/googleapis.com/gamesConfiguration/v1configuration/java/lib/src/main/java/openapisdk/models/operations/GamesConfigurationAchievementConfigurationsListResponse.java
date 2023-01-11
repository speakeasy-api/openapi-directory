package openapisdk.models.operations;



public class GamesConfigurationAchievementConfigurationsListResponse {
    public openapisdk.models.shared.AchievementConfigurationListResponse achievementConfigurationListResponse;
    public GamesConfigurationAchievementConfigurationsListResponse withAchievementConfigurationListResponse(openapisdk.models.shared.AchievementConfigurationListResponse achievementConfigurationListResponse) {
        this.achievementConfigurationListResponse = achievementConfigurationListResponse;
        return this;
    }
    public String contentType;
    public GamesConfigurationAchievementConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationAchievementConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}