package openapisdk.models.operations;



public class GamesConfigurationAchievementConfigurationsInsertResponse {
    public openapisdk.models.shared.AchievementConfiguration achievementConfiguration;
    public GamesConfigurationAchievementConfigurationsInsertResponse withAchievementConfiguration(openapisdk.models.shared.AchievementConfiguration achievementConfiguration) {
        this.achievementConfiguration = achievementConfiguration;
        return this;
    }
    public String contentType;
    public GamesConfigurationAchievementConfigurationsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationAchievementConfigurationsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}