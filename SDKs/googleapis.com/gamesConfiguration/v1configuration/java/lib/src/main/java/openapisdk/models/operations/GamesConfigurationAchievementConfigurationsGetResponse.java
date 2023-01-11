package openapisdk.models.operations;



public class GamesConfigurationAchievementConfigurationsGetResponse {
    public openapisdk.models.shared.AchievementConfiguration achievementConfiguration;
    public GamesConfigurationAchievementConfigurationsGetResponse withAchievementConfiguration(openapisdk.models.shared.AchievementConfiguration achievementConfiguration) {
        this.achievementConfiguration = achievementConfiguration;
        return this;
    }
    public String contentType;
    public GamesConfigurationAchievementConfigurationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationAchievementConfigurationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}