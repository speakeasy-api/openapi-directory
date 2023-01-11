package openapisdk.models.operations;



public class GamesAchievementsUnlockResponse {
    public openapisdk.models.shared.AchievementUnlockResponse achievementUnlockResponse;
    public GamesAchievementsUnlockResponse withAchievementUnlockResponse(openapisdk.models.shared.AchievementUnlockResponse achievementUnlockResponse) {
        this.achievementUnlockResponse = achievementUnlockResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementsUnlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsUnlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}