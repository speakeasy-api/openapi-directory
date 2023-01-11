package openapisdk.models.operations;



public class GamesManagementAchievementsResetAllResponse {
    public openapisdk.models.shared.AchievementResetAllResponse achievementResetAllResponse;
    public GamesManagementAchievementsResetAllResponse withAchievementResetAllResponse(openapisdk.models.shared.AchievementResetAllResponse achievementResetAllResponse) {
        this.achievementResetAllResponse = achievementResetAllResponse;
        return this;
    }
    public String contentType;
    public GamesManagementAchievementsResetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesManagementAchievementsResetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}