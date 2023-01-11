package openapisdk.models.operations;



public class GamesAchievementsIncrementResponse {
    public openapisdk.models.shared.AchievementIncrementResponse achievementIncrementResponse;
    public GamesAchievementsIncrementResponse withAchievementIncrementResponse(openapisdk.models.shared.AchievementIncrementResponse achievementIncrementResponse) {
        this.achievementIncrementResponse = achievementIncrementResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementsIncrementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsIncrementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}