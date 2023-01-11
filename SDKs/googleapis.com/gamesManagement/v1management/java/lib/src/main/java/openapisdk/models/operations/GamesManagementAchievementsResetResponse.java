package openapisdk.models.operations;



public class GamesManagementAchievementsResetResponse {
    public openapisdk.models.shared.AchievementResetResponse achievementResetResponse;
    public GamesManagementAchievementsResetResponse withAchievementResetResponse(openapisdk.models.shared.AchievementResetResponse achievementResetResponse) {
        this.achievementResetResponse = achievementResetResponse;
        return this;
    }
    public String contentType;
    public GamesManagementAchievementsResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesManagementAchievementsResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}