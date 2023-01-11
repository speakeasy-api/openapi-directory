package openapisdk.models.operations;



public class GamesConfigurationAchievementConfigurationsUpdateResponse {
    public openapisdk.models.shared.AchievementConfiguration achievementConfiguration;
    public GamesConfigurationAchievementConfigurationsUpdateResponse withAchievementConfiguration(openapisdk.models.shared.AchievementConfiguration achievementConfiguration) {
        this.achievementConfiguration = achievementConfiguration;
        return this;
    }
    public String contentType;
    public GamesConfigurationAchievementConfigurationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationAchievementConfigurationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}